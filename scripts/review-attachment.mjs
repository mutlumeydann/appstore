// Uploads a review attachment (e.g. screen recording) and optionally sets App Review notes for the app's editable iOS version.
// Env: ASC_*, ASC_APP_ID, FILE (path), NOTES_FILE (optional path)
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


import path from 'node:path';
const { ASC_APP_ID, FILE, NOTES_FILE } = process.env;
const vers = (await api('GET', `/apps/${ASC_APP_ID}/appStoreVersions?filter[platform]=IOS&limit=10`)).data;
const v = vers.find(x => !['READY_FOR_SALE','REPLACED_WITH_NEW_VERSION','REMOVED_FROM_SALE'].includes(x.attributes.appStoreState)) || vers[0];
console.log('version', v.attributes.versionString, v.attributes.appStoreState);
let rd = (await api('GET', `/appStoreVersions/${v.id}/appStoreReviewDetail`)).data;
if (!rd) rd = (await api('POST', '/appStoreReviewDetails', { data: { type: 'appStoreReviewDetails', attributes: {}, relationships: { appStoreVersion: { data: { type: 'appStoreVersions', id: v.id } } } } })).data;
if (NOTES_FILE) {
  const notes = fs.readFileSync(NOTES_FILE, 'utf8');
  await api('PATCH', `/appStoreReviewDetails/${rd.id}`, { data: { type: 'appStoreReviewDetails', id: rd.id, attributes: { notes } } });
  console.log('notes set', notes.length);
}
if (FILE) {
  const old = (await api('GET', `/appStoreReviewDetails/${rd.id}/appStoreReviewAttachments`)).data;
  for (const a of old) { await api('DELETE', `/appStoreReviewAttachments/${a.id}`); console.log('removed old attachment', a.attributes.fileName); }
  const buf = fs.readFileSync(FILE);
  const fileName = path.basename(FILE);
  const r = (await api('POST', '/appStoreReviewAttachments', { data: { type: 'appStoreReviewAttachments', attributes: { fileName, fileSize: buf.length }, relationships: { appStoreReviewDetail: { data: { type: 'appStoreReviewDetails', id: rd.id } } } } })).data;
  for (const op of r.attributes.uploadOperations) {
    const part = buf.subarray(op.offset, op.offset + op.length);
    const h = {}; (op.requestHeaders || []).forEach(x => h[x.name] = x.value);
    const res = await fetch(op.url, { method: op.method, headers: h, body: part });
    if (!res.ok) throw new Error('upload part ' + res.status + ' ' + (await res.text()).slice(0, 200));
  }
  const md5 = crypto.createHash('md5').update(buf).digest('hex');
  await api('PATCH', `/appStoreReviewAttachments/${r.id}`, { data: { type: 'appStoreReviewAttachments', id: r.id, attributes: { uploaded: true, sourceFileChecksum: md5 } } });
  console.log('attachment uploaded', fileName, buf.length, 'bytes');
}
