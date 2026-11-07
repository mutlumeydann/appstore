// Read-only status report: every app's iOS versions, their state, builds, and review submissions.
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


const apps = (await api('GET', '/apps?limit=50&fields[apps]=name,bundleId')).data;
for (const a of apps) {
  console.log(`\n=== ${a.attributes.name} (${a.id}) ${a.attributes.bundleId}`);
  const vers = (await api('GET', `/apps/${a.id}/appStoreVersions?limit=5&fields[appStoreVersions]=versionString,appStoreState,appVersionState,createdDate,platform`)).data;
  for (const v of vers) console.log(`  version ${v.attributes.platform} ${v.attributes.versionString}: ${v.attributes.appStoreState} / ${v.attributes.appVersionState || '-'}`);
  try {
    const subs = (await api('GET', `/reviewSubmissions?filter[app]=${a.id}&limit=5&fields[reviewSubmissions]=state,submittedDate,platform`)).data;
    for (const s of subs) console.log(`  submission ${s.attributes.platform}: ${s.attributes.state} submitted ${s.attributes.submittedDate || '-'}`);
  } catch (e) { console.log('  submissions: ' + e.message.slice(0, 120)); }
  try {
    const builds = (await api('GET', `/builds?filter[app]=${a.id}&limit=3&sort=-uploadedDate&fields[builds]=version,processingState,uploadedDate,expired`)).data;
    for (const b of builds) console.log(`  build ${b.attributes.version}: ${b.attributes.processingState} ${b.attributes.uploadedDate}`);
  } catch (e) { console.log('  builds: ' + e.message.slice(0, 120)); }
}
