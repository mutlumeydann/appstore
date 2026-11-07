// Refleks store screenshots: scene 1 = Higgsfield cafe photo, scenes 2-5 = real app (web build on :8768) in a phone frame.
const { chromium } = require('playwright');
const fs = require('fs'); const path = require('path');
const C = require('./content');
const FONTDIR = '/home/claude/shots/node_modules/@fontsource/';
const FONT_LINKS = ['noto-sans', 'noto-sans-arabic', 'noto-sans-devanagari', 'noto-sans-jp', 'noto-sans-kr', 'noto-sans-sc']
  .map(p => `<link rel="stylesheet" href="file://${FONTDIR}${p}/900.css"><link rel="stylesheet" href="file://${FONTDIR}${p}/700.css">`).join('');
const FAMILY = `"Noto Sans","Noto Sans Arabic","Noto Sans Devanagari","Noto Sans JP","Noto Sans KR","Noto Sans SC",sans-serif`;
const ACC = ['#3cff7a', '#3cff7a', '#7fa6ff', '#ffc61a', '#ff6b5c'];
function page({ W, H, slogan, accent, tablet, rtl, inner }) {
  const phoneW = tablet ? W * 0.62 : W * 0.78;
  const phoneH = phoneW * (tablet ? 1.33 : 2.17);
  const radius = tablet ? phoneW * 0.07 : phoneW * 0.13;
  const bezel = tablet ? phoneW * 0.035 : phoneW * 0.03;
  const sw = phoneW - 2 * bezel; // screen width
  return `<!DOCTYPE html><html><head><meta charset="utf-8">${FONT_LINKS}<style>
  html,body{margin:0;width:${W}px;height:${H}px;overflow:hidden;font-family:${FAMILY};font-weight:900}
  body{background:#1d1030 url(file:///home/claude/refleks-app/store/bg.png) center/cover;display:flex;flex-direction:column;align-items:center}
  .slogan{color:#fff;font-size:${Math.round(W * (tablet ? 0.06 : 0.085))}px;line-height:1.15;text-align:center;padding:${Math.round(H * 0.06)}px ${Math.round(W * 0.07)}px 0;min-height:${Math.round(H * 0.17)}px;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:100%}
  .slogan em{color:${accent};font-style:normal}
  .frame{position:absolute;left:${(W - phoneW) / 2}px;top:${Math.round(H * 0.2)}px;width:${phoneW}px;height:${phoneH}px;border-radius:${radius}px;background:#1a1a1a;box-shadow:0 ${W * 0.03}px ${W * 0.08}px rgba(0,0,0,.7), inset 0 0 0 ${bezel * 0.25}px #333}
  .screen{position:absolute;inset:${bezel}px;border-radius:${radius - bezel}px;overflow:hidden;background:#1d1030}
  .island{position:absolute;left:50%;top:${bezel * 1.6}px;transform:translateX(-50%);width:${phoneW * 0.3}px;height:${phoneW * 0.085}px;border-radius:999px;background:#000;z-index:5}
  .ring{position:absolute;border-radius:50%}
  .ring b{position:absolute;inset:0;border-radius:50%;border-style:solid;border-color:currentColor}
  .ring i{position:absolute;inset:26%;border-radius:50%;background:currentColor;opacity:.9}
  .ring span{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#1d1030;font-weight:900;z-index:2}
  .top{position:absolute;top:${sw * (tablet ? .05 : .16)}px;left:0;right:0;text-align:center;color:#eee;opacity:.6;font-size:${sw * .038}px;letter-spacing:.3em;font-weight:700}
  .home{position:absolute;inset:0;color:#eee}
  .pill{position:absolute;top:${sw * (tablet ? .04 : .15)}px;border:2px solid #333;border-radius:999px;padding:${sw * .015}px ${sw * .03}px;font-size:${sw * .032}px;color:#aaa;letter-spacing:.15em;font-weight:700}
  .pill.l{left:${sw * .05}px}.pill.r{right:${sw * .05}px}
  .mid{position:absolute;left:6%;right:6%;top:50%;transform:translateY(-50%);text-align:center}
  .h1{font-size:${sw * .04}px;letter-spacing:.4em;opacity:.5;font-weight:700}
  .msg{margin-top:${sw * .04}px;font-size:${sw * .07}px;font-weight:800;line-height:1.2}
  .subs,.modes{position:absolute;left:0;right:0;display:flex;justify-content:center;gap:${sw * .022}px;flex-wrap:nowrap}
  .subs{bottom:${sw * (tablet ? .14 : .25)}px}.modes{bottom:${sw * (tablet ? .05 : .1)}px}
  .subs b{flex-shrink:0;border:2px solid #2a2a2a;color:#888;border-radius:999px;padding:${sw * .018}px ${sw * .032}px;font-size:${sw * .029}px;letter-spacing:.1em;white-space:nowrap}
  .subs b.on{color:#fff;border-color:#fff}
  .modes b{flex-shrink:0;background:#161616;border:2px solid #2a2a2a;color:#ddd;border-radius:999px;padding:${sw * .028}px ${sw * .04}px;font-size:${sw * .034}px;letter-spacing:.1em;white-space:nowrap}
  .modes b.on{background:#fff;color:#000;border-color:#fff}
  </style></head><body>
  <div class="slogan" dir="${rtl ? 'rtl' : 'ltr'}"><span>${slogan}</span></div>
  <div class="frame">${tablet ? '' : '<div class="island"></div>'}<div class="screen" id="scr">${inner(sw, phoneH - 2 * bezel)}</div></div>
  <script>
  (function(){var el=document.querySelector('.slogan'),sp=el.firstChild;sp.style.display='inline-block';var fs=parseFloat(getComputedStyle(el).fontSize),maxH=${Math.round(H * 0.125)};
   for(var i=0;i<40;i++){ if(sp.scrollWidth<=el.clientWidth*0.92 && sp.offsetHeight<=maxH) break; fs*=0.94; el.style.fontSize=fs+'px'; }})();
  document.querySelectorAll('.subs,.modes').forEach(function(row){var bs=row.querySelectorAll('b');function tw(){var w=0;bs.forEach(function(b){w+=b.offsetWidth});return w+bs.length*12;}for(var i=0;i<30&&tw()>row.clientWidth*0.94;i++){bs.forEach(function(b){b.style.fontSize=(parseFloat(getComputedStyle(b).fontSize)*0.94)+'px'});}});
  </script></body></html>`;
}


function hero({ W, H, slogan, rtl, tablet }) {
  return `<!DOCTYPE html><html><head><meta charset="utf-8">${FONT_LINKS}<style>
  html,body{margin:0;width:${W}px;height:${H}px;overflow:hidden;font-family:${FAMILY};font-weight:900;background:#1d1030}
  img.bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 70%}
  .shade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(20,10,35,.92) 0%,rgba(20,10,35,.45) 30%,transparent 55%,rgba(20,10,35,.35) 100%)}
  .slogan{position:absolute;left:0;right:0;top:${H*0.06}px;padding:0 ${W*0.07}px;color:#fff;text-align:center;font-size:${Math.round(W*(tablet?0.065:0.09))}px;line-height:1.12;text-shadow:0 6px 30px rgba(0,0,0,.6)}
  .slogan em{color:#3cff7a;font-style:normal}
  </style></head><body><img class="bg" src="file:///home/claude/refleks-app/store/hands.png"><div class="shade"></div>
  <div class="slogan" dir="${rtl?'rtl':'ltr'}"><span>${slogan}</span></div>
  <script>(function(){var el=document.querySelector('.slogan'),sp=el.firstChild;sp.style.display='inline-block';var fs=parseFloat(getComputedStyle(el).fontSize);for(var i=0;i<40;i++){if(sp.scrollWidth<=el.clientWidth*0.92&&sp.offsetHeight<=${Math.round(H*0.16)})break;fs*=0.94;el.style.fontSize=fs+'px';}})();</script></body></html>`;
}
const SIZES = { ios61: [1206, 2622, false], ios69: [1320, 2868, false], ipad13: [2064, 2752, true], android: [1080, 2340, false], androidtab: [1600, 2560, true] };

async function waitGreen(pg) {
  await pg.waitForFunction(() => [...document.querySelectorAll('div')].some(d => getComputedStyle(d).backgroundColor === 'rgb(60, 255, 122)' && d.offsetWidth < 60), null, { timeout: 12000 });
}
async function capture(browser, lang, scene, tablet) {
  const vw = tablet ? 820 : 390, vh = tablet ? 1093 - 44 : 846 - 59 - 34;
  const n = scene === 3 ? 4 : 2, to = scene === 4 ? 1 : 5;
  const ctx = await browser.newContext({ viewport: { width: vw, height: vh }, deviceScaleFactor: tablet ? 2 : 3, hasTouch: true, isMobile: true });
  const pg = await ctx.newPage();
  await pg.goto('http://localhost:8768/'); await pg.waitForTimeout(800);
  await pg.evaluate(([lang, n, to]) => localStorage.setItem('refleks', JSON.stringify({ lang, n, to, snd: false })), [lang, n, to]);
  await pg.reload(); await pg.waitForTimeout(1200);
  const L = require('/home/claude/refleks-app/i18n.js.json');
  await pg.getByText(L[lang][8], { exact: true }).click(); await pg.waitForTimeout(400);
  const cdp = await ctx.newCDPSession(pg);
  const pts = n === 2 ? [[vw / 2, vh * 0.25], [vw / 2, vh * 0.75]] : [[vw * .25, vh * .25], [vw * .75, vh * .25], [vw * .25, vh * .75], [vw * .75, vh * .75]];
  const tp = pts.map(([x, y], i) => ({ x, y, id: i + 1 }));
  for (let k = 1; k <= tp.length; k++) { await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: tp.slice(0, k) }); await pg.waitForTimeout(50); }
  await waitGreen(pg);
  if (scene === 1) { await pg.waitForTimeout(80); }
  else {
    await pg.waitForTimeout(110);
    const winner = n === 2 ? 0 : 0; // CDP→RN-web maps this to the bottom (unflipped) player
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: tp.filter((_, i) => i !== winner) });
    await pg.waitForTimeout(scene === 4 ? 1300 : 380);
  }
  const buf = await pg.screenshot({ type: 'png' }); await ctx.close();
  return 'data:image/png;base64,' + buf.toString('base64');
}
(async () => {
  const browser = await chromium.launch();
  const out = path.join(__dirname, 'screenshots'); fs.mkdirSync(out, { recursive: true });
  const langs = Object.keys(C).filter(k => (process.argv[2] ? process.argv[2].split(',').includes(k) : true));
  for (const lang of langs) {
    const rtl = lang === 'ar'; const shots = { false: {}, true: {} };
    for (const tablet of [false, true]) for (const sc of [1, 2, 3, 4]) shots[tablet][sc] = await capture(browser, lang, sc, tablet);
    for (const [sizeName, [W, H, tablet]] of Object.entries(SIZES)) {
      const ctx = await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: 1 }); const pg = await ctx.newPage();
      for (let i = 0; i < 5; i++) {
        const tmp = path.join(out, '_tmp.html');
        if (i === 0) fs.writeFileSync(tmp, hero({ W, H, slogan: C[lang][0], rtl, tablet }));
        else {
          const img = shots[tablet][i];
          const inner = () => { const t = tablet ? 24 / 1093 : 59 / 846, b = tablet ? 20 / 1093 : 34 / 846; return `<div style="position:absolute;inset:0;background:#1d1030"></div><img src="${img}" style="position:absolute;left:0;width:100%;top:${t * 100}%;height:${(1 - t - b) * 100}%;object-fit:fill">`; };
          fs.writeFileSync(tmp, page({ W, H, slogan: C[lang][i], accent: ACC[i], tablet, rtl, inner }));
        }
        await pg.goto('file://' + tmp); await pg.evaluate(() => document.fonts.ready); await pg.waitForTimeout(150);
        await pg.screenshot({ path: path.join(out, `${lang}-${sizeName}-${i + 1}.jpg`), type: 'jpeg', quality: 90 });
      }
      await ctx.close();
    }
    console.log('done', lang);
  }
  fs.rmSync(path.join(out, '_tmp.html'), { force: true }); await browser.close();
})();
