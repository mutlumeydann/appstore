// Scanio store screenshots: scene 1 = Higgsfield hero photo, scenes 2-5 = real app (web build on :8771) in a device frame.
const { chromium } = require('playwright');
const fs = require('fs'); const path = require('path');
const C = require('./content');
const FONTDIR = '/home/claude/shots/node_modules/@fontsource/';
const FONT_LINKS = ['noto-sans', 'noto-sans-arabic', 'noto-sans-devanagari', 'noto-sans-jp', 'noto-sans-kr', 'noto-sans-sc']
  .map(p => `<link rel="stylesheet" href="file://${FONTDIR}${p}/800.css"><link rel="stylesheet" href="file://${FONTDIR}${p}/700.css">`).join('');
const FAMILY = `"Noto Sans","Noto Sans Arabic","Noto Sans Devanagari","Noto Sans JP","Noto Sans KR","Noto Sans SC",sans-serif`;
const HERE = __dirname;
const ACCENT = '#9FE7FF';
const BG = { light: '#F3F5F9', dark: '#0A0E15' };

function page({ W, H, slogan, tablet, rtl, img, dark }) {
  const phoneW = tablet ? W * 0.66 : W * 0.8;
  const phoneH = phoneW * (tablet ? 1.333 : 2.17);
  const radius = tablet ? phoneW * 0.06 : phoneW * 0.14;
  const bezel = tablet ? phoneW * 0.03 : phoneW * 0.028;
  const sh = phoneH - 2 * bezel;
  const t = tablet ? 24 / 1093 : 59 / 846, b = tablet ? 20 / 1093 : 34 / 846;
  return `<!DOCTYPE html><html><head><meta charset="utf-8">${FONT_LINKS}<style>
  html,body{margin:0;width:${W}px;height:${H}px;overflow:hidden;font-family:${FAMILY};font-weight:800}
  body{background:#2340d8 url(file://${HERE}/bg.jpg) center/cover}
  .slogan{position:absolute;left:0;right:0;top:${Math.round(H * 0.045)}px;height:${Math.round(H * 0.15)}px;padding:0 ${Math.round(W * 0.07)}px;color:#fff;font-size:${Math.round(W * (tablet ? 0.062 : 0.085))}px;line-height:1.14;text-align:center;display:flex;align-items:center;justify-content:center;letter-spacing:-0.01em;text-shadow:0 4px 24px rgba(10,20,80,.35)}
  .slogan em{color:${ACCENT};font-style:normal}
  .frame{position:absolute;left:${(W - phoneW) / 2}px;top:${Math.round(H * 0.215)}px;width:${phoneW}px;height:${phoneH}px;border-radius:${radius}px;background:#0d0f14;box-shadow:0 ${W * 0.03}px ${W * 0.09}px rgba(5,10,40,.55), inset 0 0 0 ${bezel * 0.22}px #3a3f4b}
  .screen{position:absolute;inset:${bezel}px;border-radius:${radius - bezel}px;overflow:hidden;background:${dark ? BG.dark : BG.light}}
  .island{position:absolute;left:50%;top:${bezel * 1.55}px;transform:translateX(-50%);width:${phoneW * 0.29}px;height:${phoneW * 0.082}px;border-radius:999px;background:#000;z-index:5}
  .st{position:absolute;top:0;left:0;right:0;height:${t * 100}%;display:flex;align-items:center;justify-content:space-between;padding:0 ${phoneW * 0.085}px;box-sizing:border-box;font-family:-apple-system,"Noto Sans",sans-serif;font-weight:700;font-size:${phoneW * 0.04}px;color:${dark ? '#fff' : '#0E1626'}}
  .bat{width:${phoneW * 0.06}px;height:${phoneW * 0.028}px;border:2px solid currentColor;border-radius:4px;opacity:.9;position:relative}
  .bat:after{content:"";position:absolute;inset:2px;right:20%;background:currentColor;border-radius:1px}
  .home{position:absolute;bottom:${sh * b * 0.32}px;left:50%;transform:translateX(-50%);width:${phoneW * 0.34}px;height:${phoneW * 0.012}px;border-radius:9px;background:${dark ? '#fff' : '#111'};opacity:.85}
  </style></head><body>
  <div class="slogan" dir="${rtl ? 'rtl' : 'ltr'}"><span>${slogan}</span></div>
  <div class="frame">${tablet ? '' : '<div class="island"></div>'}<div class="screen">
    <img src="${img}" style="position:absolute;left:0;width:100%;top:${t * 100}%;height:${(1 - t - b) * 100}%;object-fit:fill">
    ${tablet ? '' : `<div class="st"><span>9:41</span><span class="bat"></span></div><div class="home"></div>`}
  </div></div>
  <script>(function(){var el=document.querySelector('.slogan'),sp=el.firstChild;sp.style.display='inline-block';var fs=parseFloat(getComputedStyle(el).fontSize);
   for(var i=0;i<40;i++){ if(sp.scrollWidth<=el.clientWidth*0.98 && sp.offsetHeight<=el.clientHeight) break; fs*=0.94; el.style.fontSize=fs+'px'; }})();</script>
  </body></html>`;
}

function hero({ W, H, slogan, rtl, tablet }) {
  const src = tablet ? 'hero.jpg' : 'hero_tall.jpg';
  return `<!DOCTYPE html><html><head><meta charset="utf-8">${FONT_LINKS}<style>
  html,body{margin:0;width:${W}px;height:${H}px;overflow:hidden;font-family:${FAMILY};font-weight:800;background:#1b2a6b}
  img.bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 60%}
  .shade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(18,30,110,.92) 0%,rgba(30,40,140,.55) 24%,rgba(30,40,140,0) 44%)}
  .slogan{position:absolute;left:0;right:0;top:${H * 0.05}px;height:${H * 0.16}px;padding:0 ${W * 0.07}px;color:#fff;text-align:center;font-size:${Math.round(W * (tablet ? 0.07 : 0.095))}px;line-height:1.1;display:flex;align-items:center;justify-content:center;text-shadow:0 6px 30px rgba(0,0,40,.5)}
  .slogan em{color:${ACCENT};font-style:normal}
  .badge{position:absolute;left:50%;transform:translateX(-50%);top:${H * 0.215}px;display:flex;align-items:center;gap:${W * 0.02}px;background:rgba(255,255,255,.16);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.3);color:#fff;border-radius:999px;padding:${W * 0.012}px ${W * 0.03}px;font-size:${W * (tablet ? 0.024 : 0.034)}px;font-weight:700}
  .badge img{width:${W * (tablet ? 0.045 : 0.065)}px;height:${W * (tablet ? 0.045 : 0.065)}px;border-radius:22%}
  </style></head><body><img class="bg" src="file://${HERE}/${src}"><div class="shade"></div>
  <div class="slogan" dir="${rtl ? 'rtl' : 'ltr'}"><span>${slogan}</span></div>
  <div class="badge"><img src="file://${HERE}/../assets/icon.png"><span>Scanio</span></div>
  <script>(function(){var el=document.querySelector('.slogan'),sp=el.firstChild;sp.style.display='inline-block';var fs=parseFloat(getComputedStyle(el).fontSize);for(var i=0;i<40;i++){if(sp.scrollWidth<=el.clientWidth*0.98&&sp.offsetHeight<=el.clientHeight)break;fs*=0.94;el.style.fontSize=fs+'px';}})();</script></body></html>`;
}

const SIZES = { ios61: [1206, 2622, false], ios69: [1320, 2868, false], ipad13: [2064, 2752, true], android: [1080, 2340, false], androidtab: [1600, 2560, true] };
const FILES = ['invoice', 'notes', 'lease', 'receipt', 'lab', 'recipe'];

function seed(lang) {
  const now = Date.UTC(2026, 10, 7, 14, 0);
  return FILES.map((f, i) => ({
    id: 'd' + i, name: C[lang].d[i], created: now - i * 172800000, updated: now - i * 172800000 - 3600000 * i,
    pages: (i === 0 ? ['invoice', 'lab', 'receipt'] : i === 2 ? ['lease', 'invoice'] : [f]).map((x) => ({ f: '/sample/' + x + '.jpg', t: '/sample/t_' + x + '.jpg', w: 880, h: 1168 })),
  }));
}
// scene -> [screen, dark]
const SCENES = { 2: [{}, false], 3: [{ doc: 'd0' }, false], 4: [{ doc: 'd2', edit: true }, true], 5: [{ sheet: 'settings' }, false] };

async function capture(browser, lang, scene, tablet) {
  const vw = tablet ? 820 : 390, vh = tablet ? 1093 - 44 : 846 - 59 - 34;
  const [scr, dark] = SCENES[scene];
  const ctx = await browser.newContext({ viewport: { width: vw, height: vh }, deviceScaleFactor: tablet ? 2.5 : 3.4, colorScheme: dark ? 'dark' : 'light', locale: lang });
  const pg = await ctx.newPage();
  await pg.addInitScript(([sd, st, sc]) => { window.__SEED = sd; window.__SETTINGS = st; window.__SCREEN = sc; },
    [seed(lang), { lang, lock: true, paper: lang === 'en' ? 'letter' : 'a4', quality: 'normal' }, scr]);
  await pg.goto('http://localhost:8771/'); await pg.waitForTimeout(1600);
  const buf = await pg.screenshot({ type: 'png' }); await ctx.close();
  return { img: 'data:image/png;base64,' + buf.toString('base64'), dark };
}

(async () => {
  const browser = await chromium.launch();
  const out = path.join(HERE, 'screenshots'); fs.mkdirSync(out, { recursive: true });
  const langs = Object.keys(C).filter((k) => (process.argv[2] ? process.argv[2].split(',').includes(k) : true));
  for (const lang of langs) {
    const rtl = lang === 'ar'; const shots = { false: {}, true: {} };
    for (const tablet of [false, true]) await Promise.all([2, 3, 4, 5].map(async (sc) => { shots[tablet][sc] = await capture(browser, lang, sc, tablet); }));
    for (const [sizeName, [W, H, tablet]] of Object.entries(SIZES)) {
      const ctx = await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: 1 }); const pg = await ctx.newPage();
      for (let i = 1; i <= 5; i++) {
        const tmp = path.join(out, `_tmp_${lang}.html`);
        if (i === 1) fs.writeFileSync(tmp, hero({ W, H, slogan: C[lang].s[0], rtl, tablet }));
        else fs.writeFileSync(tmp, page({ W, H, slogan: C[lang].s[i - 1], tablet, rtl, img: shots[tablet][i].img, dark: shots[tablet][i].dark }));
        await pg.goto('file://' + tmp); await pg.evaluate(() => document.fonts.ready); await pg.waitForTimeout(150);
        await pg.screenshot({ path: path.join(out, `${lang}-${sizeName}-${i}.jpg`), type: 'jpeg', quality: 90 });
        fs.rmSync(tmp, { force: true });
      }
      await ctx.close();
    }
    console.log('done', lang);
  }
  await browser.close();
})();
