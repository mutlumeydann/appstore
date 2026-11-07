// Localized App Store listing for Refleks. Generates store.config.json.
const URL = 'https://refleks-app-benibidinle.vercel.app';
const PRIVACY = URL + '/privacy.html';
const D = (o) => o;
const L = {
  'en-US': D({ title: 'Refleks: Fastest Finger', subtitle: 'Party reaction game for 2–4',
    promo: 'Everyone holds their button. Red, red, red… green! First to let go wins. A party game for one phone and up to 4 friends.',
    keywords: 'reaction,reflex,party,game,friends,family,table,multiplayer,local,fast,finger,speed,duel,challenge',
    description: `Who has the fastest reflexes at the table?

Put the phone in the middle. Everyone holds a finger on their own colored button. Three red lights come on one by one… then, after a random pause, GREEN! The first to let go wins the round. Let go too early and you're out for that round.

• 2, 3 or 4 players on one phone
• Play to 3, 5 or 10 points
• Reaction time in milliseconds, with a quick verdict: "Lightning!", "Wake up!"
• Champion screen with confetti
• Real arcade sounds and vibration
• Screens turn so everyone around the table can read their side
• 14 languages
• No ads, no account, no internet needed

Perfect for cafés, family dinners, long trips and settling who goes first.

Buy once, play forever.`, notes: 'First release.' }),
  tr: D({ title: 'Refleks: En Hızlı Parmak', subtitle: '2–4 kişilik refleks oyunu',
    promo: 'Herkes düğmesine bassın. Kırmızı, kırmızı, kırmızı… yeşil! İlk bırakan kazanır. Tek telefonla 4 kişiye kadar parti oyunu.',
    keywords: 'refleks,tepki,oyun,parti,arkadaş,aile,masa,hız,parmak,düello,çok,oyunculu,eğlence,yarışma',
    description: `Masadaki en hızlı refleks kimde?

Telefonu ortaya koyun. Herkes kendi renkli düğmesine parmağını bassın. Üç kırmızı lamba tek tek yanar… sonra beklenmedik bir anda YEŞİL! Parmağını ilk bırakan turu alır. Erken bırakan o turu yakar.

• Tek telefonda 2, 3 ya da 4 oyuncu
• 3, 5 ya da 10 puana kadar
• Milisaniye cinsinden tepki süresi ve yorumu: "Şimşek gibi!", "Uyandın mı?"
• Konfetili şampiyonluk ekranı
• Gerçek oyun salonu sesleri ve titreşim
• Ekran, masanın etrafındaki herkes kendi tarafını okuyacak şekilde döner
• 14 dil
• Reklam yok, hesap yok, internet gerekmez

Kafede, aile sofrasında, uzun yolda ve "kim başlayacak" tartışmalarında birebir.

Bir kere al, hep oyna.`, notes: 'İlk sürüm.' }),
  'es-ES': D({ title: 'Refleks: El Dedo más Rápido', subtitle: 'Juego de reflejos para 2–4',
    promo: 'Todos mantienen su botón. Rojo, rojo, rojo… ¡verde! Gana el primero en soltar. Un juego de fiesta para un solo móvil.',
    keywords: 'reflejos,reacción,fiesta,juego,amigos,familia,mesa,multijugador,rápido,dedo,duelo,reto,velocidad',
    description: `¿Quién tiene los reflejos más rápidos de la mesa?

Pon el móvil en el centro. Cada uno mantiene un dedo en su botón de color. Se encienden tres luces rojas… y tras una pausa al azar, ¡VERDE! El primero en soltar gana la ronda. Si sueltas antes, pierdes esa ronda.

• 2, 3 o 4 jugadores en un solo móvil
• Partidas a 3, 5 o 10 puntos
• Tiempo de reacción en milisegundos con un veredicto: "¡Un rayo!", "¿Despierto?"
• Pantalla de campeón con confeti
• Sonidos de arcade reales y vibración
• Cada jugador lee su lado desde su sitio
• 14 idiomas
• Sin anuncios, sin cuenta, sin internet

Cómpralo una vez, juega para siempre.`, notes: 'Primera versión.' }),
  'de-DE': D({ title: 'Refleks: Schnellster Finger', subtitle: 'Reaktionsspiel für 2–4 Spieler',
    promo: 'Alle halten ihren Knopf. Rot, rot, rot… grün! Wer zuerst loslässt, gewinnt. Partyspiel für ein Handy und bis zu 4 Leute.',
    keywords: 'reaktion,reflex,party,spiel,freunde,familie,tisch,mehrspieler,schnell,finger,duell,wettkampf',
    description: `Wer hat am Tisch die schnellsten Reflexe?

Leg das Handy in die Mitte. Alle halten einen Finger auf ihrem farbigen Knopf. Drei rote Lampen gehen an… dann, nach einer zufälligen Pause: GRÜN! Wer zuerst loslässt, gewinnt die Runde. Wer zu früh loslässt, verliert sie.

• 2, 3 oder 4 Spieler auf einem Handy
• Spiel bis 3, 5 oder 10 Punkte
• Reaktionszeit in Millisekunden mit Kommentar: "Blitzschnell!", "Aufwachen!"
• Siegerbildschirm mit Konfetti
• Echte Arcade-Sounds und Vibration
• Jeder kann seine Seite vom Platz aus lesen
• 14 Sprachen
• Keine Werbung, kein Konto, kein Internet nötig

Einmal kaufen, für immer spielen.`, notes: 'Erste Version.' }),
  'fr-FR': D({ title: 'Refleks : Le Doigt le + Rapide', subtitle: 'Jeu de réflexes, 2 à 4 joueurs',
    promo: 'Chacun garde son bouton. Rouge, rouge, rouge… vert ! Le premier qui lâche gagne. Un jeu de soirée sur un seul téléphone.',
    keywords: 'réflexe,réaction,soirée,jeu,amis,famille,table,multijoueur,rapide,doigt,duel,défi,vitesse',
    description: `Qui a les meilleurs réflexes autour de la table ?

Posez le téléphone au milieu. Chacun garde un doigt sur son bouton de couleur. Trois feux rouges s’allument… puis, après une pause au hasard : VERT ! Le premier qui lâche gagne la manche. Lâcher trop tôt fait perdre la manche.

• 2, 3 ou 4 joueurs sur un seul téléphone
• Parties en 3, 5 ou 10 points
• Temps de réaction en millisecondes avec un verdict : « Éclair ! », « Réveille-toi ! »
• Écran de champion avec confettis
• Vrais sons d’arcade et vibrations
• Chacun lit son côté depuis sa place
• 14 langues
• Sans pub, sans compte, sans internet

Achetez une fois, jouez pour toujours.`, notes: 'Première version.' }),
  it: D({ title: 'Refleks: Il Dito più Veloce', subtitle: 'Gioco di riflessi per 2–4',
    promo: 'Tutti tengono premuto il pulsante. Rosso, rosso, rosso… verde! Vince chi lascia per primo. Un party game su un solo telefono.',
    keywords: 'riflessi,reazione,festa,gioco,amici,famiglia,tavolo,multigiocatore,veloce,dito,sfida,duello',
    description: `Chi ha i riflessi più veloci al tavolo?

Metti il telefono al centro. Ognuno tiene un dito sul suo pulsante colorato. Si accendono tre luci rosse… poi, dopo una pausa casuale: VERDE! Chi lascia per primo vince il round. Chi lascia troppo presto lo perde.

• 2, 3 o 4 giocatori su un solo telefono
• Partite a 3, 5 o 10 punti
• Tempo di reazione in millisecondi con un verdetto: "Un fulmine!", "Sveglia!"
• Schermata del campione con coriandoli
• Veri suoni arcade e vibrazione
• Ognuno legge il proprio lato dal suo posto
• 14 lingue
• Niente pubblicità, niente account, niente internet

Compralo una volta, gioca per sempre.`, notes: 'Prima versione.' }),
  'pt-BR': D({ title: 'Refleks: O Dedo mais Rápido', subtitle: 'Jogo de reflexo, 2–4 jogadores',
    promo: 'Todos seguram o seu botão. Vermelho, vermelho, vermelho… verde! Quem soltar primeiro vence. Jogo de festa num só celular.',
    keywords: 'reflexo,reação,festa,jogo,amigos,família,mesa,multiplayer,rápido,dedo,duelo,desafio,velocidade',
    description: `Quem tem o reflexo mais rápido da mesa?

Coloque o celular no meio. Cada um segura um dedo no seu botão colorido. Três luzes vermelhas acendem… e, depois de uma pausa aleatória: VERDE! Quem soltar primeiro vence a rodada. Soltou antes? Perdeu a rodada.

• 2, 3 ou 4 jogadores em um celular
• Partidas até 3, 5 ou 10 pontos
• Tempo de reação em milissegundos com um veredito: "Um raio!", "Acorda!"
• Tela de campeão com confete
• Sons de fliperama de verdade e vibração
• Cada um lê o seu lado de onde está
• 14 idiomas
• Sem anúncios, sem conta, sem internet

Compre uma vez, jogue para sempre.`, notes: 'Primeira versão.' }),
  ru: D({ title: 'Refleks: Самый быстрый палец', subtitle: 'Игра на реакцию для 2–4',
    promo: 'Все держат свою кнопку. Красный, красный, красный… зелёный! Кто первым отпустит — победил. Игра для компании на одном телефоне.',
    keywords: 'реакция,рефлекс,игра,вечеринка,друзья,семья,стол,мультиплеер,быстро,палец,дуэль,вызов',
    description: `У кого за столом самая быстрая реакция?

Положите телефон в центр. Каждый держит палец на своей цветной кнопке. Загораются три красных огня… и после случайной паузы — ЗЕЛЁНЫЙ! Кто первым отпустит, выигрывает раунд. Отпустил раньше — проиграл раунд.

• 2, 3 или 4 игрока на одном телефоне
• Игра до 3, 5 или 10 очков
• Время реакции в миллисекундах и вердикт: «Молния!», «Проснись!»
• Экран чемпиона с конфетти
• Настоящие аркадные звуки и вибрация
• Каждый читает свою сторону со своего места
• 14 языков
• Без рекламы, без аккаунта, без интернета

Купите один раз — играйте всегда.`, notes: 'Первая версия.' }),
  'ar-SA': D({ title: 'Refleks: أسرع إصبع', subtitle: 'لعبة ردّ فعل من 2 إلى 4 لاعبين',
    promo: 'كل لاعب يضغط زرّه. أحمر، أحمر، أحمر… أخضر! أول من يرفع إصبعه يفوز. لعبة جماعية على هاتف واحد.',
    keywords: 'ردة فعل,سرعة,لعبة,جماعية,أصدقاء,عائلة,طاولة,تحدي,إصبع,مسابقة,حفلة,لاعبين',
    description: `من صاحب أسرع ردّ فعل على الطاولة؟

ضعوا الهاتف في المنتصف. كل لاعب يضع إصبعه على زرّه الملوّن. تضيء ثلاثة أضواء حمراء… ثم بعد توقف عشوائي: أخضر! أول من يرفع إصبعه يفوز بالجولة. ومن يرفع مبكرًا يخسرها.

• 2 أو 3 أو 4 لاعبين على هاتف واحد
• حتى 3 أو 5 أو 10 نقاط
• زمن ردّ الفعل بالملّي ثانية مع تعليق: "كالبرق!"، "استيقظ!"
• شاشة البطل مع قصاصات ملونة
• أصوات ألعاب حقيقية واهتزاز
• كل لاعب يقرأ جهته من مكانه
• 14 لغة
• بلا إعلانات، بلا حساب، بلا إنترنت

اشترها مرة والعب إلى الأبد.`, notes: 'الإصدار الأول.' }),
  hi: D({ title: 'Refleks: सबसे तेज़ उंगली', subtitle: '2–4 लोगों का रिफ़्लेक्स गेम',
    promo: 'सब अपना बटन दबाए रखें। लाल, लाल, लाल… हरा! जो पहले छोड़े, वो जीते। एक फ़ोन पर दोस्तों के साथ पार्टी गेम।',
    keywords: 'रिफ़्लेक्स,गेम,पार्टी,दोस्त,परिवार,तेज़,उंगली,मुकाबला,चुनौती,reaction,reflex,party',
    description: `टेबल पर सबसे तेज़ रिफ़्लेक्स किसके हैं?

फ़ोन बीच में रखें। सब अपने रंगीन बटन पर उंगली रखें। तीन लाल बत्तियाँ जलती हैं… फिर अचानक हरी! जो सबसे पहले उंगली छोड़े, वो राउंड जीते। पहले छोड़ा तो राउंड हारे।

• एक फ़ोन पर 2, 3 या 4 खिलाड़ी
• 3, 5 या 10 अंक तक
• मिलीसेकंड में रिएक्शन टाइम और टिप्पणी: "बिजली जैसे!", "जागो!"
• कंफ़ेटी वाली चैंपियन स्क्रीन
• असली आर्केड आवाज़ें और कंपन
• हर खिलाड़ी अपनी तरफ़ से पढ़ सकता है
• 14 भाषाएँ
• न विज्ञापन, न अकाउंट, न इंटरनेट

एक बार खरीदें, हमेशा खेलें।`, notes: 'पहला संस्करण।' }),
  id: D({ title: 'Refleks: Jari Tercepat', subtitle: 'Game refleks untuk 2–4 pemain',
    promo: 'Semua tahan tombolnya. Merah, merah, merah… hijau! Yang pertama melepas menang. Game pesta di satu ponsel.',
    keywords: 'refleks,reaksi,game,pesta,teman,keluarga,meja,multiplayer,cepat,jari,duel,tantangan',
    description: `Siapa yang refleksnya paling cepat di meja?

Taruh ponsel di tengah. Semua menahan jari di tombol warnanya. Tiga lampu merah menyala… lalu, setelah jeda acak: HIJAU! Yang pertama melepas memenangkan ronde. Lepas terlalu cepat, ronde hilang.

• 2, 3 atau 4 pemain di satu ponsel
• Main sampai 3, 5 atau 10 poin
• Waktu reaksi dalam milidetik dengan komentar: "Kilat!", "Bangun!"
• Layar juara dengan konfeti
• Suara arkade asli dan getaran
• Tiap pemain bisa membaca sisinya
• 14 bahasa
• Tanpa iklan, tanpa akun, tanpa internet

Beli sekali, main selamanya.`, notes: 'Rilis pertama.' }),
  ja: D({ title: 'Refleks: 反射神経バトル', subtitle: '2〜4人で遊べるパーティーゲーム',
    promo: 'みんなでボタンを押したまま。赤、赤、赤…緑！最初に離した人の勝ち。スマホ1台で遊べる対戦ゲーム。',
    keywords: '反射神経,反応,パーティー,ゲーム,友達,家族,対戦,早押し,指,スピード,勝負,みんなで',
    description: `テーブルでいちばん反射神経がいいのは誰？

スマホを真ん中に置いて、みんな自分の色のボタンに指を置いたまま。赤いランプが3つ灯って…ランダムな間のあと、緑！最初に指を離した人がラウンドの勝ち。早く離すとそのラウンドは負けです。

• スマホ1台で2〜4人
• 3・5・10点先取
• ミリ秒単位の反応時間とひとこと：「稲妻！」「起きて！」
• 紙吹雪のチャンピオン画面
• 本物のアーケード音と振動
• 向かい合っても自分の側が読める表示
• 14言語対応
• 広告なし、アカウント不要、ネット不要

一度買えばずっと遊べます。`, notes: '最初のリリース。' }),
  ko: D({ title: 'Refleks: 가장 빠른 손가락', subtitle: '2~4인 반응속도 파티 게임',
    promo: '모두 버튼을 누르고 있어요. 빨강, 빨강, 빨강… 초록! 먼저 떼는 사람이 승리. 휴대폰 하나로 즐기는 파티 게임.',
    keywords: '반응속도,반사신경,파티,게임,친구,가족,대결,손가락,스피드,술게임,멀티,도전',
    description: `테이블에서 반사신경이 가장 빠른 사람은?

휴대폰을 가운데 두고, 모두 자기 색 버튼에 손가락을 올려요. 빨간불 세 개가 켜지고… 랜덤한 순간 초록불! 가장 먼저 떼는 사람이 라운드 승리. 너무 일찍 떼면 그 라운드는 패배예요.

• 휴대폰 하나로 2, 3, 4명
• 3, 5, 10점 선승
• 밀리초 단위 반응 시간과 한마디: "번개!", "일어나!"
• 색종이가 터지는 챔피언 화면
• 진짜 아케이드 사운드와 진동
• 마주 앉아도 자기 쪽을 읽을 수 있어요
• 14개 언어
• 광고 없음, 계정 없음, 인터넷 불필요

한 번 사면 평생 플레이.`, notes: '첫 출시.' }),
  'zh-Hans': D({ title: 'Refleks: 最快手指', subtitle: '2–4人反应力派对游戏',
    promo: '大家按住自己的按钮。红、红、红……绿！最先松手的人获胜。一部手机就能玩的派对游戏。',
    keywords: '反应,反应力,派对,游戏,朋友,家人,桌游,多人,手指,速度,对决,挑战',
    description: `桌上谁的反应最快？

把手机放在中间，每人按住自己颜色的按钮。三盏红灯依次亮起……随机停顿后，绿灯！最先松手的人赢得这一回合。松手太早，这回合就输了。

• 一部手机 2、3 或 4 人同玩
• 3、5 或 10 分制
• 毫秒级反应时间与点评：“闪电！”“醒醒！”
• 彩纸飞舞的冠军画面
• 真实街机音效与振动
• 面对面坐也能看清自己一侧
• 支持 14 种语言
• 无广告、无账号、无需网络

一次购买，永久畅玩。`, notes: '首个版本。' }),
};
const MIRRORS = { 'en-GB': 'en-US', 'en-AU': 'en-US', 'en-CA': 'en-US', 'es-MX': 'es-ES', 'pt-PT': 'pt-BR', 'fr-CA': 'fr-FR' };
const OVERRIDE = { 'es-MX': { title: 'Refleks: ¿Quién es más Rápido?' } };

function info(x) {
  return {
    title: x.title, subtitle: x.subtitle, description: x.description, promoText: x.promo,
    keywords: x.keywords.split(','), releaseNotes: x.notes,
    marketingUrl: URL, supportUrl: PRIVACY, privacyPolicyUrl: PRIVACY,
  };
}
const out = { configVersion: 0, apple: {
  copyright: `${new Date().getFullYear()} Mutlu Meydan`,
  categories: ['GAMES', 'ENTERTAINMENT'],
  advisory: {},
  release: { automaticRelease: true },
  review: { firstName: 'Mutlu', lastName: 'Meydan', email: 'mutlumeydan01@gmail.com', phone: '+905452218733', demoRequired: false,
    notes: 'Local multiplayer reaction game on one device. Choose 2-4 players and press Start. Each player holds a finger on their colored button; three red lights come on, then after a random pause a green light. The first player to lift their finger wins the round (reaction time shown); lifting before green is a foul. To test alone, hold two fingers (one per zone) and lift one when green. No sign-in, no network.' },
  info: {},
} };
for (const [k, v] of Object.entries(L)) out.apple.info[k] = info(v);
for (const [k, base] of Object.entries(MIRRORS)) out.apple.info[k] = info({ ...L[base], ...(OVERRIDE[k] || {}) });

const errs = [];
for (const [k, v] of Object.entries(out.apple.info)) {
  if ([...v.title].length > 30) errs.push(`${k} title ${[...v.title].length}`);
  if ([...v.subtitle].length > 30) errs.push(`${k} subtitle ${[...v.subtitle].length}`);
  if ([...v.keywords.join(',')].length > 100) errs.push(`${k} keywords ${[...v.keywords.join(',')].length}`);
  if ([...v.promoText].length > 170) errs.push(`${k} promo ${[...v.promoText].length}`);
}
if (errs.length) { console.error('LIMIT ERRORS:\n' + errs.join('\n')); process.exit(1); }
require('fs').writeFileSync(require('path').join(__dirname, '..', 'store.config.json'), JSON.stringify(out, null, 2));
console.log('store.config.json written:', Object.keys(out.apple.info).length, 'locales');
