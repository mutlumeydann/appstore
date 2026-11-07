// Makes the account holder an internal TestFlight tester for the given apps (all builds).
// Env: ASC_KEY_ID, ASC_ISSUER_ID, ASC_PRIVATE_KEY
import crypto from 'node:crypto';
import fs from 'node:fs';

const { ASC_KEY_ID, ASC_ISSUER_ID, ASC_PRIVATE_KEY } = process.env;
if (!ASC_KEY_ID || !ASC_ISSUER_ID || !ASC_PRIVATE_KEY) throw new Error('Missing ASC_* env');
let PK = ASC_PRIVATE_KEY.replace(/\r/g, '').trim();
if (!PK.includes('BEGIN')) PK = `-----BEGIN PRIVATE KEY-----\n${PK.replace(/\s+/g, '').match(/.{1,64}/g).join('\n')}\n-----END PRIVATE KEY-----`;

const API = 'https://api.appstoreconnect.apple.com/v1';
const b64url = (b) => Buffer.from(b).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
function jwt() {
  const now = Math.floor(Date.now() / 1000);
  const h = b64url(JSON.stringify({ alg: 'ES256', kid: ASC_KEY_ID, typ: 'JWT' }));
  const p = b64url(JSON.stringify({ iss: ASC_ISSUER_ID, iat: now, exp: now + 600, aud: 'appstoreconnect-v1' }));
  const s = crypto.sign('sha256', Buffer.from(`${h}.${p}`), { key: PK, dsaEncoding: 'ieee-p1363' });
  return `${h}.${p}.${b64url(s)}`;
}
async function api(method, url, body) {
  const res = await fetch(url.startsWith('http') ? url : API + url, {
    method, headers: { Authorization: `Bearer ${jwt()}`, 'Content-Type': 'application/json' }, body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`${method} ${url.split('?')[0]} -> ${res.status}: ${text.slice(0, 400)}`);
  return text ? JSON.parse(text) : null;
}


const ids = (process.env.APP_IDS || '').split(',').map(s => s.trim()).filter(Boolean);
const users = (await api('GET', '/users?limit=50')).data;
users.forEach(u => console.log('user', u.attributes.username, (u.attributes.roles || []).join('/')));
const me = users.find(u => (u.attributes.roles || []).includes('ACCOUNT_HOLDER')) || users[0];
const email = me.attributes.username;
console.log('tester:', email);
for (const id of ids) {
  try {
    const groups = (await api('GET', `/apps/${id}/betaGroups?limit=50`)).data;
    let g = groups.find(x => x.attributes.isInternalGroup);
    if (!g) {
      g = (await api('POST', '/betaGroups', { data: { type: 'betaGroups', attributes: { name: 'Team', isInternalGroup: true, hasAccessToAllBuilds: true }, relationships: { app: { data: { type: 'apps', id } } } } })).data;
      console.log(id, 'created internal group', g.id);
    } else console.log(id, 'internal group exists', g.id, g.attributes.name);
    const testers = (await api('GET', `/betaGroups/${g.id}/betaTesters?limit=200`)).data;
    if (testers.some(t => (t.attributes.email || '').toLowerCase() === email.toLowerCase())) { console.log(id, 'already tester'); continue; }
    try {
      await api('POST', '/betaTesters', { data: { type: 'betaTesters', attributes: { email, firstName: me.attributes.firstName, lastName: me.attributes.lastName }, relationships: { betaGroups: { data: [{ type: 'betaGroups', id: g.id }] } } } });
      console.log(id, 'tester added');
    } catch (e) {
      const ex = (await api('GET', `/betaTesters?filter[email]=${encodeURIComponent(email)}&limit=5`)).data;
      if (ex[0]) { await api('POST', `/betaGroups/${g.id}/relationships/betaTesters`, { data: [{ type: 'betaTesters', id: ex[0].id }] }); console.log(id, 'existing tester linked'); }
      else console.log(id, 'add failed', e.message.slice(0, 300));
    }
  } catch (e) { console.log(id, 'ERROR', e.message.slice(0, 300)); }
}
