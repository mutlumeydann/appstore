// Localized App Store listing for Scanio. Generates store.config.json.
const URL = 'https://scanio-app-benibidinle.vercel.app';
const PRIVACY = URL + '/privacy.html';
const D = (o) => o;
const L = {
  'en-US': D({ title: 'Scanio: PDF Document Scanner', subtitle: 'Paper to PDF. No subscription',
    promo: 'Point, scan, share. Edges are found automatically and every page becomes a clean PDF. No subscription, no ads, no account — your files stay on your phone.',
    keywords: 'scan,scanner,pdf,document,doc,camera,receipt,paper,converter,fax,sign,notes,contract,invoice,office',
    description: `Turn paper into a clean PDF in seconds.

Scanio uses your camera to find the edges of the page, straightens it and removes the background — automatically. Scan one page or fifty, then share the PDF by email, WhatsApp, Files or AirDrop, or print it.

• Automatic edge detection and perspective correction
• Multi-page documents: add, rotate, reorder or delete pages
• Import photos from your library and turn them into a PDF
• Share as PDF or image, or print directly
• A4 or Letter paper size, normal or high quality
• Search and rename your documents
• Face ID / passcode lock for private papers
• Light and dark mode, iPhone and iPad
• 14 languages

Private by design: your documents are stored only on your device. No account, no cloud, no tracking.

No subscription. No ads. Pay once, scan forever.`, notes: 'First release.' }),
  tr: D({ title: 'Scanio: PDF Belge Tarayıcı', subtitle: 'Kâğıttan PDF. Abonelik yok',
    promo: 'Tut, tara, paylaş. Kenarlar otomatik bulunur, her sayfa temiz bir PDF olur. Abonelik yok, reklam yok, hesap yok — belgelerin telefonunda kalır.',
    keywords: 'tarayıcı,tara,pdf,belge,doküman,kamera,fiş,kağıt,dönüştürücü,fatura,sözleşme,not,ofis,imza,evrak',
    description: `Kâğıdı saniyeler içinde temiz bir PDF'e çevir.

Scanio kamerayla sayfanın kenarlarını bulur, düzeltir ve arka planı temizler; hepsi otomatik. İster tek sayfa ister elli sayfa tara, sonra PDF'i e-posta, WhatsApp, Dosyalar ya da AirDrop ile paylaş veya yazdır.

• Otomatik kenar bulma ve perspektif düzeltme
• Çok sayfalı belgeler: sayfa ekle, döndür, sırala, sil
• Galerideki fotoğrafları PDF'e çevir
• PDF ya da görsel olarak paylaş, doğrudan yazdır
• A4 veya Letter kâğıt, normal ya da yüksek kalite
• Belgelerinde ara, yeniden adlandır
• Özel evraklar için Face ID / parola kilidi
• Açık ve koyu mod, iPhone ve iPad
• 14 dil

Gizlilik önce: Belgelerin yalnızca cihazında saklanır. Hesap yok, bulut yok, takip yok.

Abonelik yok. Reklam yok. Bir kere al, hep tara.`, notes: 'İlk sürüm.' }),
  'es-ES': D({ title: 'Scanio: Escáner de PDF', subtitle: 'Papel a PDF. Sin suscripción',
    promo: 'Apunta, escanea y comparte. Los bordes se detectan solos y cada página se convierte en un PDF limpio. Sin suscripción, sin anuncios, sin cuenta.',
    keywords: 'escáner,escanear,pdf,documento,cámara,recibo,papel,convertidor,factura,contrato,apuntes,oficina',
    description: `Convierte el papel en un PDF limpio en segundos.

Scanio usa la cámara para detectar los bordes de la página, la endereza y limpia el fondo automáticamente. Escanea una página o cincuenta y comparte el PDF por correo, WhatsApp, Archivos o AirDrop, o imprímelo.

• Detección automática de bordes y corrección de perspectiva
• Documentos de varias páginas: añade, gira, ordena o elimina páginas
• Importa fotos de tu galería y conviértelas en PDF
• Comparte como PDF o imagen, o imprime directamente
• Papel A4 o Carta, calidad normal o alta
• Busca y renombra tus documentos
• Bloqueo con Face ID o código para papeles privados
• Modo claro y oscuro, iPhone y iPad
• 14 idiomas

Privado desde el diseño: tus documentos se guardan solo en tu dispositivo. Sin cuenta, sin nube, sin rastreo.

Sin suscripción. Sin anuncios. Paga una vez, escanea siempre.`, notes: 'Primera versión.' }),
  'de-DE': D({ title: 'Scanio: PDF Dokumentenscanner', subtitle: 'Papier zu PDF. Ohne Abo',
    promo: 'Ausrichten, scannen, teilen. Ränder werden automatisch erkannt und jede Seite wird zum sauberen PDF. Kein Abo, keine Werbung, kein Konto.',
    keywords: 'scanner,scannen,pdf,dokument,kamera,beleg,quittung,papier,rechnung,vertrag,notizen,büro,unterschrift',
    description: `Mach aus Papier in Sekunden ein sauberes PDF.

Scanio erkennt mit der Kamera die Ränder der Seite, richtet sie gerade aus und entfernt den Hintergrund – automatisch. Scanne eine Seite oder fünfzig und teile das PDF per Mail, WhatsApp, Dateien oder AirDrop – oder drucke es.

• Automatische Kantenerkennung und Perspektivkorrektur
• Mehrseitige Dokumente: Seiten hinzufügen, drehen, sortieren, löschen
• Fotos aus der Mediathek in PDF umwandeln
• Als PDF oder Bild teilen oder direkt drucken
• A4 oder Letter, normale oder hohe Qualität
• Dokumente durchsuchen und umbenennen
• Sperre mit Face ID / Code für private Unterlagen
• Hell- und Dunkelmodus, iPhone und iPad
• 14 Sprachen

Privat von Grund auf: Deine Dokumente bleiben nur auf deinem Gerät. Kein Konto, keine Cloud, kein Tracking.

Kein Abo. Keine Werbung. Einmal kaufen, für immer scannen.`, notes: 'Erste Version.' }),
  'fr-FR': D({ title: 'Scanio : Scanner PDF', subtitle: 'Papier en PDF. Sans abonnement',
    promo: 'Vise, scanne, partage. Les bords sont détectés tout seuls et chaque page devient un PDF net. Sans abonnement, sans pub, sans compte.',
    keywords: 'scanner,scan,pdf,document,caméra,reçu,ticket,papier,facture,contrat,notes,bureau,signature,numériser',
    description: `Transforme le papier en PDF net en quelques secondes.

Scanio détecte les bords de la page avec l'appareil photo, la redresse et nettoie le fond automatiquement. Scanne une page ou cinquante, puis partage le PDF par e-mail, WhatsApp, Fichiers ou AirDrop, ou imprime-le.

• Détection automatique des bords et correction de perspective
• Documents multipages : ajoute, pivote, réorganise ou supprime des pages
• Importe des photos de ta galerie et transforme-les en PDF
• Partage en PDF ou en image, ou imprime directement
• Format A4 ou Letter, qualité normale ou haute
• Recherche et renomme tes documents
• Verrou Face ID / code pour les papiers privés
• Mode clair et sombre, iPhone et iPad
• 14 langues

Confidentiel par nature : tes documents restent uniquement sur ton appareil. Pas de compte, pas de cloud, pas de suivi.

Sans abonnement. Sans pub. Achète une fois, scanne pour toujours.`, notes: 'Première version.' }),
  it: D({ title: 'Scanio: Scanner PDF', subtitle: 'Scanner PDF senza abbonamento',
    promo: 'Inquadra, scansiona, condividi. I bordi vengono trovati da soli e ogni pagina diventa un PDF pulito. Niente abbonamento, niente pubblicità.',
    keywords: 'scanner,scansione,pdf,documento,fotocamera,scontrino,ricevuta,carta,fattura,contratto,appunti',
    description: `Trasforma la carta in un PDF pulito in pochi secondi.

Scanio usa la fotocamera per trovare i bordi della pagina, la raddrizza e pulisce lo sfondo in automatico. Scansiona una pagina o cinquanta e condividi il PDF via e-mail, WhatsApp, File o AirDrop, oppure stampalo.

• Rilevamento automatico dei bordi e correzione della prospettiva
• Documenti multipagina: aggiungi, ruota, riordina o elimina pagine
• Importa foto dalla libreria e trasformale in PDF
• Condividi come PDF o immagine, o stampa direttamente
• Formato A4 o Letter, qualità normale o alta
• Cerca e rinomina i tuoi documenti
• Blocco con Face ID / codice per i documenti privati
• Modalità chiara e scura, iPhone e iPad
• 14 lingue

Privato per scelta: i tuoi documenti restano solo sul tuo dispositivo. Nessun account, nessun cloud, nessun tracciamento.

Nessun abbonamento. Nessuna pubblicità. Paghi una volta, scansioni per sempre.`, notes: 'Prima versione.' }),
  'pt-BR': D({ title: 'Scanio: Scanner de PDF', subtitle: 'Papel em PDF. Sem assinatura',
    promo: 'Aponte, escaneie e compartilhe. As bordas são detectadas sozinhas e cada página vira um PDF limpo. Sem assinatura, sem anúncios, sem conta.',
    keywords: 'scanner,escanear,digitalizar,pdf,documento,câmera,recibo,papel,nota fiscal,contrato,anotações',
    description: `Transforme papel em um PDF limpo em segundos.

O Scanio usa a câmera para encontrar as bordas da página, endireita e limpa o fundo automaticamente. Escaneie uma página ou cinquenta e compartilhe o PDF por e-mail, WhatsApp, Arquivos ou AirDrop, ou imprima.

• Detecção automática de bordas e correção de perspectiva
• Documentos com várias páginas: adicione, gire, reordene ou exclua páginas
• Importe fotos da galeria e transforme em PDF
• Compartilhe como PDF ou imagem, ou imprima direto
• Papel A4 ou Carta, qualidade normal ou alta
• Busque e renomeie seus documentos
• Bloqueio com Face ID / código para papéis privados
• Modo claro e escuro, iPhone e iPad
• 14 idiomas

Privado por natureza: seus documentos ficam só no seu aparelho. Sem conta, sem nuvem, sem rastreamento.

Sem assinatura. Sem anúncios. Pague uma vez, escaneie para sempre.`, notes: 'Primeira versão.' }),
  ru: D({ title: 'Scanio: сканер документов PDF', subtitle: 'Бумага в PDF. Без подписки',
    promo: 'Наведи, отсканируй, отправь. Края находятся сами, каждая страница становится чистым PDF. Без подписки, без рекламы, без аккаунта.',
    keywords: 'сканер,сканировать,pdf,документ,камера,чек,бумага,счёт,договор,конспект,офис,подпись,скан',
    description: `Превращай бумагу в чистый PDF за секунды.

Scanio с помощью камеры находит края страницы, выравнивает её и убирает фон автоматически. Сканируй одну страницу или пятьдесят и отправляй PDF по почте, в WhatsApp, Файлы или AirDrop — или распечатай.

• Автоматический поиск краёв и исправление перспективы
• Многостраничные документы: добавляй, поворачивай, меняй порядок, удаляй
• Импорт фото из галереи и превращение их в PDF
• Отправка в PDF или картинкой, печать напрямую
• Формат A4 или Letter, обычное или высокое качество
• Поиск и переименование документов
• Блокировка Face ID / код-паролем для личных бумаг
• Светлая и тёмная тема, iPhone и iPad
• 14 языков

Приватность прежде всего: документы хранятся только на твоём устройстве. Без аккаунта, без облака, без слежки.

Без подписки. Без рекламы. Купи один раз — сканируй всегда.`, notes: 'Первая версия.' }),
  'ar-SA': D({ title: 'Scanio: ماسح المستندات PDF', subtitle: 'حوّل الورق إلى PDF بلا اشتراك',
    promo: 'وجّه، امسح، شارك. تُكتشف الحواف تلقائيًا وتتحول كل صفحة إلى PDF نظيف. بلا اشتراك، بلا إعلانات، بلا حساب.',
    keywords: 'ماسح,مسح,pdf,مستند,وثيقة,كاميرا,إيصال,ورق,فاتورة,عقد,ملاحظات,مكتب,توقيع,سكانر',
    description: `حوّل الورق إلى PDF نظيف في ثوانٍ.

يستخدم Scanio الكاميرا ليجد حواف الصفحة ويقوّمها وينظّف الخلفية تلقائيًا. امسح صفحة واحدة أو خمسين، ثم شارك ملف PDF عبر البريد أو واتساب أو الملفات أو AirDrop، أو اطبعه.

• اكتشاف الحواف وتصحيح المنظور تلقائيًا
• مستندات متعددة الصفحات: أضف الصفحات ودوّرها ورتّبها واحذفها
• استورد الصور من مكتبتك وحوّلها إلى PDF
• شارك بصيغة PDF أو صورة، أو اطبع مباشرة
• ورق A4 أو Letter، جودة عادية أو عالية
• ابحث في مستنداتك وأعد تسميتها
• قفل Face ID / رمز المرور للأوراق الخاصة
• الوضع الفاتح والداكن، iPhone وiPad
• 14 لغة

الخصوصية أولًا: تُحفظ مستنداتك على جهازك فقط. بلا حساب، بلا سحابة، بلا تتبّع.

بلا اشتراك. بلا إعلانات. ادفع مرة وامسح للأبد.`, notes: 'الإصدار الأول.' }),
  hi: D({ title: 'Scanio: PDF डॉक्यूमेंट स्कैनर', subtitle: 'PDF स्कैनर, बिना सब्सक्रिप्शन',
    promo: 'कैमरा दिखाएँ, स्कैन करें, शेयर करें। किनारे अपने-आप मिलते हैं और हर पेज साफ़ PDF बनता है। कोई सब्सक्रिप्शन, विज्ञापन या अकाउंट नहीं।',
    keywords: 'स्कैनर,स्कैन,pdf,दस्तावेज़,कैमरा,रसीद,काग़ज़,बिल,अनुबंध,नोट्स,ऑफ़िस,scanner,scan,document',
    description: `काग़ज़ को सेकंडों में साफ़ PDF बनाएँ।

Scanio कैमरे से पेज के किनारे ढूँढता है, उसे सीधा करता है और बैकग्राउंड हटा देता है — सब अपने-आप। एक पेज या पचास पेज स्कैन करें, फिर PDF को ईमेल, WhatsApp, Files या AirDrop से भेजें या प्रिंट करें।

• किनारों की अपने-आप पहचान और सीधा करना
• कई पेज वाले दस्तावेज़: पेज जोड़ें, घुमाएँ, क्रम बदलें, हटाएँ
• गैलरी की फ़ोटो से PDF बनाएँ
• PDF या इमेज के रूप में शेयर करें, सीधे प्रिंट करें
• A4 या Letter साइज़, सामान्य या उच्च क्वालिटी
• दस्तावेज़ खोजें और नाम बदलें
• निजी काग़ज़ों के लिए Face ID / पासकोड लॉक
• लाइट और डार्क मोड, iPhone और iPad
• 14 भाषाएँ

निजता सबसे पहले: आपके दस्तावेज़ सिर्फ़ आपके डिवाइस पर रहते हैं। कोई अकाउंट नहीं, कोई क्लाउड नहीं, कोई ट्रैकिंग नहीं।

कोई सब्सक्रिप्शन नहीं। कोई विज्ञापन नहीं। एक बार ख़रीदें, हमेशा स्कैन करें।`, notes: 'पहला संस्करण।' }),
  id: D({ title: 'Scanio: Pemindai Dokumen PDF', subtitle: 'Kertas ke PDF. Tanpa langganan',
    promo: 'Arahkan, pindai, bagikan. Tepi terdeteksi otomatis dan setiap halaman jadi PDF yang rapi. Tanpa langganan, tanpa iklan, tanpa akun.',
    keywords: 'pemindai,scan,scanner,pdf,dokumen,kamera,struk,kertas,faktur,kontrak,catatan,kantor,tanda tangan',
    description: `Ubah kertas jadi PDF yang rapi dalam hitungan detik.

Scanio memakai kamera untuk menemukan tepi halaman, meluruskannya, dan membersihkan latar secara otomatis. Pindai satu halaman atau lima puluh, lalu bagikan PDF lewat email, WhatsApp, File, atau AirDrop, atau cetak.

• Deteksi tepi otomatis dan koreksi perspektif
• Dokumen banyak halaman: tambah, putar, urutkan, atau hapus halaman
• Impor foto dari galeri dan ubah jadi PDF
• Bagikan sebagai PDF atau gambar, atau cetak langsung
• Kertas A4 atau Letter, kualitas normal atau tinggi
• Cari dan ganti nama dokumen
• Kunci Face ID / kode sandi untuk dokumen pribadi
• Mode terang dan gelap, iPhone dan iPad
• 14 bahasa

Privasi sejak awal: dokumen hanya disimpan di perangkatmu. Tanpa akun, tanpa cloud, tanpa pelacakan.

Tanpa langganan. Tanpa iklan. Bayar sekali, pindai selamanya.`, notes: 'Rilis pertama.' }),
  ja: D({ title: 'Scanio: PDFスキャナー', subtitle: '紙をPDFに。サブスクなし',
    promo: 'かざして、スキャンして、共有。ふちは自動で検出され、どのページもきれいなPDFに。サブスクなし、広告なし、アカウント不要。',
    keywords: 'スキャン,スキャナー,pdf,書類,文書,カメラ,レシート,領収書,紙,請求書,契約書,ノート,オフィス',
    description: `紙を数秒できれいなPDFに。

Scanioはカメラでページのふちを見つけ、まっすぐに補正し、背景を自動で消します。1ページでも50ページでもスキャンして、メール・LINE・WhatsApp・ファイル・AirDropで共有、またはそのまま印刷できます。

• ふちの自動検出と台形補正
• 複数ページの書類：ページの追加・回転・並べ替え・削除
• 写真ライブラリの画像をPDFに変換
• PDFまたは画像で共有、直接印刷
• 用紙サイズA4 / Letter、標準画質 / 高画質
• 書類の検索と名前の変更
• 大切な書類はFace ID / パスコードでロック
• ライト・ダークモード、iPhone・iPad対応
• 14言語対応

プライバシー重視：書類はこの端末にだけ保存されます。アカウントもクラウドもトラッキングもありません。

サブスクなし。広告なし。一度の購入でずっと使えます。`, notes: '初回リリース。' }),
  ko: D({ title: 'Scanio: PDF 문서 스캐너', subtitle: '종이를 PDF로. 구독 없음',
    promo: '비추고, 스캔하고, 공유하세요. 테두리는 자동으로 찾고 모든 페이지가 깔끔한 PDF가 됩니다. 구독, 광고, 계정 모두 없어요.',
    keywords: '스캔,스캐너,pdf,문서,카메라,영수증,종이,청구서,계약서,필기,사무,서명,변환',
    description: `종이를 몇 초 만에 깔끔한 PDF로.

Scanio는 카메라로 페이지의 테두리를 찾아 반듯하게 펴고 배경을 자동으로 정리합니다. 한 장이든 쉰 장이든 스캔한 뒤 메일, 카카오톡, 파일, AirDrop으로 PDF를 공유하거나 바로 인쇄하세요.

• 자동 테두리 감지와 원근 보정
• 여러 페이지 문서: 페이지 추가, 회전, 순서 변경, 삭제
• 사진 보관함의 이미지를 PDF로 변환
• PDF나 이미지로 공유, 바로 인쇄
• A4 또는 Letter 용지, 보통 또는 고화질
• 문서 검색과 이름 변경
• 중요한 서류는 Face ID / 암호로 잠금
• 라이트·다크 모드, iPhone·iPad 지원
• 14개 언어

개인정보 우선: 문서는 이 기기에만 저장됩니다. 계정도, 클라우드도, 추적도 없어요.

구독 없음. 광고 없음. 한 번 구매로 평생 스캔.`, notes: '첫 출시.' }),
  'zh-Hans': D({ title: 'Scanio: PDF 文档扫描仪', subtitle: '纸张转 PDF，无需订阅',
    promo: '对准、扫描、分享。自动识别边缘，每一页都变成清晰的 PDF。无订阅、无广告、无需账号。',
    keywords: '扫描,扫描仪,扫描王,pdf,文档,文件,相机,收据,小票,发票,合同,笔记,办公,签名',
    description: `几秒钟把纸张变成清晰的 PDF。

Scanio 用相机自动识别页面边缘，拉直页面并清理背景。扫描一页或五十页都可以，然后通过邮件、微信、文件或隔空投送分享 PDF，或直接打印。

• 自动识别边缘并校正透视
• 多页文档：添加、旋转、排序或删除页面
• 从相册导入照片并生成 PDF
• 以 PDF 或图片分享，或直接打印
• A4 或 Letter 纸张，普通或高清画质
• 搜索和重命名文档
• 私密文件可用面容 ID / 密码锁定
• 浅色与深色模式，支持 iPhone 和 iPad
• 支持 14 种语言

隐私优先：文档只保存在你的设备上。无账号、无云端、无追踪。

无需订阅。没有广告。一次购买，永久使用。`, notes: '首个版本。' }),
};
const MIRRORS = { 'en-GB': 'en-US', 'en-AU': 'en-US', 'en-CA': 'en-US', 'es-MX': 'es-ES', 'pt-PT': 'pt-BR', 'fr-CA': 'fr-FR' };
const OVERRIDE = { 'es-MX': { title: 'Scanio: Escáner de Documentos' }, 'pt-PT': { title: 'Scanio: Digitalizar para PDF' } };

function info(x) {
  return {
    title: x.title, subtitle: x.subtitle, description: x.description, promoText: x.promo,
    keywords: x.keywords.split(','), releaseNotes: x.notes,
    marketingUrl: URL, supportUrl: PRIVACY, privacyPolicyUrl: PRIVACY,
  };
}
const out = { configVersion: 0, apple: {
  copyright: `${new Date().getFullYear()} Mutlu Meydan`,
  categories: ['PRODUCTIVITY', 'BUSINESS'],
  advisory: {},
  release: { automaticRelease: true },
  review: { firstName: 'Mutlu', lastName: 'Meydan', email: 'mutlumeydan01@gmail.com', phone: '+905452218733', demoRequired: false,
    notes: 'Document scanner. Tap Scan to open the iOS document camera (VisionKit), capture one or more pages and tap Save; the document opens with its pages. Tap Share PDF to export, or Print. Tap Edit to rotate, reorder or delete pages; tap the title to rename. The Photos button imports images from the library. Settings (top-right icon): paper size, PDF quality, optional Face ID/passcode lock, language. All files are stored locally on the device; no sign-in, no network, no data collected.' },
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
