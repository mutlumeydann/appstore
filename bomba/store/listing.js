// Localized App Store listing for Bomba. Generates store.config.json.
const URL = 'https://bomba-app-benibidinle.vercel.app';
const PRIVACY = URL + '/privacy.html';
const D = (o) => o;
const L = {
  'en-US': D({ title: 'Bomba: Hot Potato Party Game', subtitle: 'Say a word, pass the bomb!',
    promo: 'Light the fuse, name something from the category and pass the phone. The ticking speeds up… whoever holds it at BOOM loses!',
    keywords: 'hot potato,party,game,word,category,friends,family,pass,bomb,group,fun,timer,catch phrase,tick',
    description: `Light the fuse and pass the bomb!

A category pops up: "A fruit", "A city", "Something in the kitchen"… Name one out loud and hand the phone to the next player. The fuse burns, the ticking gets faster and faster, the screen heats up red… and nobody knows when it will blow. Whoever is holding it at BOOM loses the round!

• Random fuse every round: you never know when it explodes
• Short, medium or long fuse
• 24 categories, or play without them for pure hot potato
• Ticking that speeds up, sparks, heat glow and a big explosion
• Real sounds and vibration
• Works for 2 to 20 players on a single phone
• 14 languages
• No ads, no account, no internet needed

Perfect for parties, family nights, road trips and classrooms.

Buy once, play forever.`, notes: 'First release.' }),
  tr: D({ title: 'Bomba: Elden Ele Parti Oyunu', subtitle: 'Bir şey söyle, bombayı uzat!',
    promo: 'Fitili yak, kategoriden bir şey söyle ve telefonu uzat. Tik tak hızlanıyor… BUM anında elinde kalan kaybeder!',
    keywords: 'parti,oyun,kelime,kategori,arkadaş,aile,grup,eğlence,sıcak patates,süre,tik tak,elden ele',
    description: `Fitili yak, bombayı uzat!

Ekranda bir kategori çıkar: "Bir meyve", "Bir şehir", "Mutfakta bir şey"… Bir tane söyle ve telefonu yanındakine ver. Fitil yanıyor, tik tak giderek hızlanıyor, ekran kızarıyor… ve kimse ne zaman patlayacağını bilmiyor. BUM anında bomba kimin elindeyse o kaybeder!

• Her turda rastgele süre: ne zaman patlayacağı belli olmaz
• Kısa, orta ya da uzun fitil
• 24 kategori, istersen kategorisiz klasik sıcak patates
• Hızlanan tik tak, kıvılcımlar, kızaran ekran ve büyük patlama
• Gerçek sesler ve titreşim
• Tek telefonla 2'den 20 kişiye kadar
• 14 dil
• Reklam yok, hesap yok, internet gerekmez

Partilerde, aile akşamlarında, uzun yolda ve sınıfta birebir.

Bir kere al, hep oyna.`, notes: 'İlk sürüm.' }),
  'es-ES': D({ title: 'Bomba: Juego de Fiesta', subtitle: '¡Di algo y pasa la bomba!',
    promo: 'Enciende la mecha, di algo de la categoría y pasa el móvil. El tictac se acelera… ¡quien la tenga al estallar pierde!',
    keywords: 'patata caliente,fiesta,juego,palabras,categorías,amigos,familia,grupo,bomba,pasar,reto,tictac',
    description: `¡Enciende la mecha y pasa la bomba!

Aparece una categoría: "Una fruta", "Una ciudad", "Algo de la cocina"… Di una en voz alta y pasa el móvil al siguiente. La mecha arde, el tictac va cada vez más rápido, la pantalla se pone roja… y nadie sabe cuándo explotará. ¡Quien la tenga en el BUM pierde la ronda!

• Mecha aleatoria en cada ronda: nunca sabes cuándo explota
• Mecha corta, media o larga
• 24 categorías, o juega sin ellas a la patata caliente clásica
• Tictac que se acelera, chispas, brillo de calor y una gran explosión
• Sonidos reales y vibración
• De 2 a 20 jugadores con un solo móvil
• 14 idiomas
• Sin anuncios, sin cuenta, sin internet

Ideal para fiestas, noches en familia, viajes y clases.

Cómpralo una vez, juega para siempre.`, notes: 'Primera versión.' }),
  'de-DE': D({ title: 'Bomba: Heiße Kartoffel', subtitle: 'Sag ein Wort, gib die Bombe!',
    promo: 'Zünde die Lunte, nenne etwas aus der Kategorie und gib das Handy weiter. Das Ticken wird schneller… wer sie beim BUMM hält, verliert!',
    keywords: 'partyspiel,spiel,wörter,kategorie,freunde,familie,gruppe,bombe,weitergeben,tick,spaß,kartoffel',
    description: `Zünde die Lunte und gib die Bombe weiter!

Eine Kategorie erscheint: „Ein Obst", „Eine Stadt", „Etwas aus der Küche"… Nenne etwas laut und gib das Handy an den Nächsten. Die Lunte brennt, das Ticken wird immer schneller, der Bildschirm glüht rot… und niemand weiß, wann sie explodiert. Wer sie beim BUMM in der Hand hat, verliert die Runde!

• Zufällige Lunte in jeder Runde: Du weißt nie, wann es knallt
• Kurze, mittlere oder lange Lunte
• 24 Kategorien, oder ohne Kategorien als klassische heiße Kartoffel
• Schneller werdendes Ticken, Funken, Glut und eine große Explosion
• Echte Sounds und Vibration
• 2 bis 20 Spieler mit einem Handy
• 14 Sprachen
• Keine Werbung, kein Konto, kein Internet nötig

Perfekt für Partys, Familienabende, Reisen und den Unterricht.

Einmal kaufen, für immer spielen.`, notes: 'Erste Version.' }),
  'fr-FR': D({ title: 'Bomba : Jeu de Soirée', subtitle: 'Dis un mot, passe la bombe !',
    promo: 'Allume la mèche, cite un mot de la catégorie et passe le téléphone. Le tic-tac accélère… celui qui la tient au BOUM perd !',
    keywords: 'patate chaude,soirée,jeu,mots,catégorie,amis,famille,groupe,bombe,passer,tic tac,défi',
    description: `Allume la mèche et passe la bombe !

Une catégorie s'affiche : « Un fruit », « Une ville », « Un objet de cuisine »… Cites-en un à voix haute et passe le téléphone au suivant. La mèche brûle, le tic-tac s'accélère, l'écran rougit… et personne ne sait quand ça va exploser. Celui qui la tient au BOUM perd la manche !

• Mèche aléatoire à chaque manche : impossible de savoir quand ça saute
• Mèche courte, moyenne ou longue
• 24 catégories, ou sans catégorie pour la patate chaude classique
• Tic-tac qui accélère, étincelles, lueur rouge et grosse explosion
• Vrais sons et vibrations
• De 2 à 20 joueurs sur un seul téléphone
• 14 langues
• Sans pub, sans compte, sans internet

Idéal pour les soirées, en famille, en voyage et en classe.

Achetez une fois, jouez pour toujours.`, notes: 'Première version.' }),
  it: D({ title: 'Bomba: Gioco per Feste', subtitle: 'Di\' una cosa, passa la bomba!',
    promo: 'Accendi la miccia, di\' qualcosa della categoria e passa il telefono. Il ticchettio accelera… chi la tiene al BUM perde!',
    keywords: 'patata bollente,festa,gioco,parole,categorie,amici,famiglia,gruppo,bomba,passa,tic tac,sfida',
    description: `Accendi la miccia e passa la bomba!

Appare una categoria: "Un frutto", "Una città", "Qualcosa in cucina"… Dinne una ad alta voce e passa il telefono al prossimo. La miccia brucia, il ticchettio accelera, lo schermo diventa rosso… e nessuno sa quando esploderà. Chi la tiene al BUM perde il round!

• Miccia casuale a ogni round: non sai mai quando esplode
• Miccia corta, media o lunga
• 24 categorie, o senza categorie per la classica patata bollente
• Ticchettio che accelera, scintille, bagliore rosso e una grande esplosione
• Suoni reali e vibrazione
• Da 2 a 20 giocatori con un solo telefono
• 14 lingue
• Niente pubblicità, niente account, niente internet

Perfetto per feste, serate in famiglia, viaggi e in classe.

Compra una volta, gioca per sempre.`, notes: 'Prima versione.' }),
  'pt-BR': D({ title: 'Bomba: Jogo de Festa', subtitle: 'Fale algo e passe a bomba!',
    promo: 'Acenda o pavio, fale algo da categoria e passe o celular. O tique-taque acelera… quem estiver com ela no BUM perde!',
    keywords: 'batata quente,festa,jogo,palavras,categoria,amigos,família,grupo,bomba,passar,tique taque',
    description: `Acenda o pavio e passe a bomba!

Aparece uma categoria: "Uma fruta", "Uma cidade", "Algo da cozinha"… Fale uma em voz alta e passe o celular para o próximo. O pavio queima, o tique-taque fica cada vez mais rápido, a tela fica vermelha… e ninguém sabe quando vai explodir. Quem estiver com ela no BUM perde a rodada!

• Pavio aleatório a cada rodada: você nunca sabe quando explode
• Pavio curto, médio ou longo
• 24 categorias, ou jogue sem elas na clássica batata quente
• Tique-taque acelerando, faíscas, brilho vermelho e uma grande explosão
• Sons reais e vibração
• De 2 a 20 jogadores com um só celular
• 14 idiomas
• Sem anúncios, sem conta, sem internet

Perfeito para festas, noites em família, viagens e sala de aula.

Compre uma vez, jogue para sempre.`, notes: 'Primeira versão.' }),
  ru: D({ title: 'Бомба: игра для компании', subtitle: 'Назови слово, передай бомбу!',
    promo: 'Подожги фитиль, назови что-то из категории и передай телефон. Тиканье ускоряется… у кого рванёт в руках — проиграл!',
    keywords: 'горячая картошка,вечеринка,игра,слова,категории,друзья,семья,компания,бомба,передай,тик так',
    description: `Подожги фитиль и передай бомбу!

На экране категория: «Фрукт», «Город», «Что-то на кухне»… Назови вслух и передай телефон следующему. Фитиль горит, тиканье всё быстрее, экран краснеет… и никто не знает, когда рванёт. У кого в руках БУМ — тот проиграл раунд!

• Случайный фитиль каждый раунд: никогда не знаешь, когда взорвётся
• Короткий, средний или длинный фитиль
• 24 категории или классическая «горячая картошка» без них
• Ускоряющееся тиканье, искры, красное свечение и большой взрыв
• Настоящие звуки и вибрация
• От 2 до 20 игроков на одном телефоне
• 14 языков
• Без рекламы, без аккаунта, без интернета

Идеально для вечеринок, семейных вечеров, поездок и уроков.

Купи один раз — играй всегда.`, notes: 'Первая версия.' }),
  'ar-SA': D({ title: 'بومبا: لعبة الحفلات', subtitle: 'قل كلمة ومرّر القنبلة!',
    promo: 'أشعل الفتيل، قل شيئًا من الفئة ومرّر الهاتف. التكتكة تتسارع… من تنفجر في يده يخسر!',
    keywords: 'حفلة,لعبة,كلمات,فئات,أصدقاء,عائلة,مجموعة,قنبلة,تمرير,البطاطا الساخنة,تحدي,تكتكة',
    description: `أشعل الفتيل ومرّر القنبلة!

تظهر فئة: "فاكهة"، "مدينة"، "شيء في المطبخ"… قل واحدًا بصوت عالٍ ومرّر الهاتف للاعب التالي. الفتيل يحترق، والتكتكة تتسارع، والشاشة تحمرّ… ولا أحد يعرف متى ستنفجر. من تكون في يده لحظة الانفجار يخسر الجولة!

• فتيل عشوائي في كل جولة: لا تعرف أبدًا متى تنفجر
• فتيل قصير أو متوسط أو طويل
• 24 فئة، أو العب بدونها كالبطاطا الساخنة الكلاسيكية
• تكتكة متسارعة وشرارات ووهج أحمر وانفجار كبير
• أصوات حقيقية واهتزاز
• من 2 إلى 20 لاعبًا على هاتف واحد
• 14 لغة
• بلا إعلانات، بلا حساب، بلا إنترنت

مثالية للحفلات والسهرات العائلية والرحلات والفصول الدراسية.

اشترِ مرة واحدة والعب للأبد.`, notes: 'الإصدار الأول.' }),
  hi: D({ title: 'Bomba: पार्टी गेम', subtitle: 'एक शब्द बोलो, बम आगे बढ़ाओ!',
    promo: 'फ्यूज़ जलाओ, कैटेगरी से कुछ बोलो और फ़ोन आगे बढ़ाओ। टिक-टिक तेज़ होती है… धमाके के वक़्त जिसके हाथ में हो, वो हारा!',
    keywords: 'पार्टी,गेम,शब्द,कैटेगरी,दोस्त,परिवार,ग्रुप,बम,पास,मज़ा,टाइमर,party,game,bomb,word',
    description: `फ्यूज़ जलाओ और बम आगे बढ़ाओ!

स्क्रीन पर एक कैटेगरी आती है: "एक फल", "एक शहर", "रसोई की कोई चीज़"… ज़ोर से एक नाम बोलो और फ़ोन अगले खिलाड़ी को दो। फ्यूज़ जल रहा है, टिक-टिक तेज़ होती जा रही है, स्क्रीन लाल हो रही है… और किसी को नहीं पता कब फटेगा। धमाके के वक़्त जिसके हाथ में बम हो, वो राउंड हारा!

• हर राउंड में रैंडम फ्यूज़: पता नहीं कब फटेगा
• छोटा, मध्यम या लंबा फ्यूज़
• 24 कैटेगरी, या बिना कैटेगरी क्लासिक खेल
• तेज़ होती टिक-टिक, चिंगारियाँ, लाल चमक और बड़ा धमाका
• असली आवाज़ें और वाइब्रेशन
• एक फ़ोन पर 2 से 20 खिलाड़ी
• 14 भाषाएँ
• कोई विज्ञापन नहीं, कोई अकाउंट नहीं, इंटरनेट की ज़रूरत नहीं

पार्टी, परिवार, सफ़र और क्लास के लिए बढ़िया।

एक बार ख़रीदो, हमेशा खेलो।`, notes: 'पहला संस्करण।' }),
  id: D({ title: 'Bomba: Game Pesta', subtitle: 'Sebut kata, oper bomnya!',
    promo: 'Nyalakan sumbu, sebut sesuatu dari kategori dan oper ponselnya. Detaknya makin cepat… yang memegang saat DUAR kalah!',
    keywords: 'pesta,game,kata,kategori,teman,keluarga,grup,bom,oper,seru,kentang panas,tantangan,tik tok',
    description: `Nyalakan sumbu dan oper bomnya!

Muncul kategori: "Buah", "Kota", "Benda di dapur"… Sebut satu dengan keras lalu oper ponsel ke pemain berikutnya. Sumbu terbakar, detak makin cepat, layar memerah… dan tak ada yang tahu kapan meledak. Yang memegangnya saat DUAR kalah di ronde itu!

• Sumbu acak tiap ronde: tak pernah tahu kapan meledak
• Sumbu pendek, sedang, atau panjang
• 24 kategori, atau main tanpa kategori ala kentang panas klasik
• Detak yang makin cepat, percikan api, cahaya merah, dan ledakan besar
• Suara asli dan getaran
• 2 sampai 20 pemain dengan satu ponsel
• 14 bahasa
• Tanpa iklan, tanpa akun, tanpa internet

Cocok untuk pesta, malam keluarga, perjalanan, dan kelas.

Beli sekali, main selamanya.`, notes: 'Rilis pertama.' }),
  ja: D({ title: 'Bomba: 爆弾まわしパーティー', subtitle: 'お題に答えて爆弾をパス！',
    promo: '導火線に火をつけ、お題に答えてスマホを次の人へ。カチカチがどんどん速く… ドカーンの瞬間に持っていた人の負け！',
    keywords: 'パーティー,ゲーム,爆弾,お題,連想,友達,家族,グループ,バクダン,パス,盛り上がる,宴会,飲み会',
    description: `導火線に火をつけて、爆弾をまわそう！

お題が出ます：「くだもの」「都市」「キッチンにあるもの」… 声に出して1つ答えたら、スマホを次の人へ。導火線が燃え、カチカチ音はどんどん速くなり、画面は赤く熱を帯びていく… いつ爆発するかは誰にもわかりません。ドカーンの瞬間に持っていた人がそのラウンドの負け！

• 毎回ランダムな導火線：いつ爆発するかわからない
• 短い・普通・長いの3段階
• 24のお題カテゴリー、お題なしでもOK
• 加速するカチカチ音、火花、赤く光る画面、大爆発
• リアルなサウンドとバイブレーション
• 1台のスマホで2〜20人まで
• 14言語対応
• 広告なし・アカウント不要・オフラインでプレイ

パーティー、家族の夜、旅行、教室にぴったり。

一度の購入で、ずっと遊べます。`, notes: '初回リリース。' }),
  ko: D({ title: 'Bomba: 폭탄 돌리기 파티 게임', subtitle: '단어를 말하고 폭탄을 넘겨!',
    promo: '심지에 불을 붙이고, 주제에 맞는 단어를 말한 뒤 폰을 넘기세요. 째깍 소리가 빨라지고… 펑! 하는 순간 들고 있으면 패배!',
    keywords: '파티,게임,폭탄,폭탄돌리기,주제,단어,친구,가족,모임,술게임,단체,넘기기,째깍',
    description: `심지에 불을 붙이고 폭탄을 넘기세요!

주제가 나옵니다: "과일", "도시", "부엌에 있는 것"… 큰 소리로 하나 말하고 다음 사람에게 폰을 넘기세요. 심지는 타들어 가고, 째깍 소리는 점점 빨라지고, 화면은 빨갛게 달아오릅니다… 언제 터질지는 아무도 모릅니다. 펑! 하는 순간 들고 있는 사람이 그 라운드 패배!

• 매 라운드 무작위 심지: 언제 터질지 모름
• 짧은 / 보통 / 긴 심지
• 24가지 주제, 또는 주제 없이 클래식하게
• 빨라지는 째깍 소리, 불꽃, 붉은 열기, 큰 폭발
• 실감 나는 사운드와 진동
• 폰 하나로 2~20명
• 14개 언어
• 광고 없음, 계정 없음, 인터넷 필요 없음

파티, 가족 모임, 여행, 교실에 딱.

한 번 사면 평생 플레이.`, notes: '첫 출시.' }),
  'zh-Hans': D({ title: 'Bomba: 传炸弹派对游戏', subtitle: '说出一个词，把炸弹传下去！',
    promo: '点燃引线，说出一个符合主题的词，再把手机传给下一个人。滴答声越来越快……爆炸时拿着的人就输了！',
    keywords: '派对,游戏,炸弹,传炸弹,击鼓传花,主题,词语,朋友,家人,聚会,团建,桌游,滴答',
    description: `点燃引线，把炸弹传下去！

屏幕出现主题：“一种水果”“一座城市”“厨房里的东西”……大声说出一个，然后把手机传给下一位。引线在燃烧，滴答声越来越快，屏幕越来越红……谁也不知道它何时爆炸。爆炸那一刻拿着炸弹的人输掉本轮！

• 每轮随机引线：永远猜不到何时爆炸
• 短、中、长三种引线
• 24 个主题，也可以不用主题直接传
• 加速的滴答声、火花、红色热光和大爆炸
• 真实音效与振动
• 一部手机 2 到 20 人同玩
• 支持 14 种语言
• 无广告、无账号、无需网络

派对、家庭聚会、旅行和课堂的绝佳选择。

一次购买，永久畅玩。`, notes: '首个版本。' }),
};
const MIRRORS = { 'en-GB': 'en-US', 'en-AU': 'en-US', 'en-CA': 'en-US', 'es-MX': 'es-ES', 'pt-PT': 'pt-BR', 'fr-CA': 'fr-FR' };
const OVERRIDE = { 'es-MX': { title: 'Bomba: Papa Caliente' }, 'pt-PT': { title: 'Bomba: Batata Quente' } };

function info(x) {
  return {
    title: x.title, subtitle: x.subtitle, description: x.description, promoText: x.promo,
    keywords: x.keywords.split(','), releaseNotes: x.notes,
    marketingUrl: URL, supportUrl: PRIVACY, privacyPolicyUrl: PRIVACY,
  };
}
const out = { configVersion: 0, apple: {
  copyright: `${new Date().getFullYear()} Mutlu Meydan`,
  categories: ['GAMES', 'GAMES_FAMILY', 'GAMES_WORD'],
  advisory: {},
  release: { automaticRelease: true },
  review: { firstName: 'Mutlu', lastName: 'Meydan', email: 'mutlumeydan01@gmail.com', phone: '+905452218733', demoRequired: false,
    notes: 'Offline hot-potato party game on one device. Choose a fuse length (short/medium/long) and whether to show categories, then tap the light button. A category appears (e.g. "A fruit"); players say a matching word and pass the phone. The ticking speeds up and after a random time (8-60 s depending on fuse) the bomb explodes; the player holding it loses. Tap "Again" to play another round. No sign-in, no network, no data collected.' },
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
  if ([...v.description].length > 4000) errs.push(`${k} desc`);
}
if (errs.length) { console.error('LIMIT ERRORS:\n' + errs.join('\n')); process.exit(1); }
require('fs').writeFileSync(require('path').join(__dirname, '..', 'store.config.json'), JSON.stringify(out, null, 2));
console.log('store.config.json written:', Object.keys(out.apple.info).length, 'locales');
