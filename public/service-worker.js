var dataCacheName = 'template-pwa';
var cacheName = 'template-pwa';
var filesToCache = [
  './bootstrap/css/bootstrap-grid.css',
  './bootstrap/css/bootstrap-grid.css.map',
  './bootstrap/css/bootstrap-grid.min.css',
  './bootstrap/css/bootstrap-grid.min.css.map',
  './bootstrap/css/bootstrap-reboot.css',
  './bootstrap/css/bootstrap-reboot.css.map',
  './bootstrap/css/bootstrap-reboot.min.css',
  './bootstrap/css/bootstrap-reboot.min.css.map',
  './bootstrap/css/bootstrap.css',
  './bootstrap/css/bootstrap.css.map',
  './bootstrap/css/bootstrap.min.css',
  './bootstrap/css/bootstrap.min.css.map',
  './bootstrap/js/bootstrap.bundle.js',
  './bootstrap/js/bootstrap.bundle.min.js',
  './bootstrap/js/bootstrap.bundle.js.map',
  './bootstrap/js/bootstrap.bundle.min.js.map',
  './bootstrap/js/bootstrap.js',
  './bootstrap/js/bootstrap.js.map',
  './bootstrap/js/bootstrap.min.js',
  './bootstrap/js/bootstrap.min.js.map',
  './fonts/roboto/Roboto-Bold.woff',
  './fonts/roboto/Roboto-Bold.woff2',
  './fonts/roboto/Roboto-Light.woff',
  './fonts/roboto/Roboto-Light.woff2',
  './fonts/roboto/Roboto-Medium.woff',
  './fonts/roboto/Roboto-Medium.woff2',
  './fonts/roboto/Roboto-Regular.woff',
  './fonts/roboto/Roboto-Regular.woff2',
  './fonts/roboto/Roboto-Thin.woff',
  './fonts/roboto/Roboto-Thin.woff2',
  './images/img1.jpg',
  './images/img2.png',
  './images/img3.jpg',
  './images/img4.jpg',
  './images/img5.png',
  './images/img6.jpg',
  './images/Logo.png',
  './images/icons/android-icon-144x144.png',
  './images/icons/android-icon-192x192.png',
  './images/icons/android-icon-36x36.png',
  './images/icons/android-icon-48x48.png',
  './images/icons/android-icon-72x72.png',
  './images/icons/android-icon-96x96.png',
  './images/icons/apple-icon-114x114.png',
  './images/icons/apple-icon-120x120.png',
  './images/icons/apple-icon-144x144.png',
  './images/icons/apple-icon-152x152.png',
  './images/icons/apple-icon-180x180.png',
  './images/icons/apple-icon-57x57.png',
  './images/icons/apple-icon-60x60.png',
  './images/icons/apple-icon-72x72.png',
  './images/icons/apple-icon-76x76.png',
  './images/icons/apple-icon-precomposed.png',
  './images/icons/apple-icon.png',
  './images/icons/browserconfig.xml',
  './images/icons/favicon-16x16.png',
  './images/icons/favicon-32x32.png',
  './images/icons/favicon-96x96.png',
  './images/icons/favicon.ico',
  './images/icons/manifest.json',
  './images/icons/ms-icon-144x144.png',
  './images/icons/ms-icon-150x150.png',
  './images/icons/ms-icon-310x310.png',
  './images/icons/ms-icon-70x70.png',
  './images/Socialmedia/icon-facebook.png',
  './images/Socialmedia/icon-instagram.png',
  './images/Socialmedia/icon-snapchat.png',
  './images/Socialmedia/icon-twitter.png',
  './images/Virksomhedslogoer/3byg-vindue-rentegnet.png',
  './images/Virksomhedslogoer/Amphenol Procom_logo_print_CMYK.png',
  './images/Virksomhedslogoer/Attendo_pos_150mm150dpi.png',
  './images/Virksomhedslogoer/Bang Nielsen.png',
  './images/Virksomhedslogoer/bautalogopng.png',
  './images/Virksomhedslogoer/BrenntagLogo.GIF',
  './images/Virksomhedslogoer/Campus_logo_rentegn_web.jpg',
  './images/Virksomhedslogoer/CORO_cmyk_27_mm_tagline.png',
  './images/Virksomhedslogoer/EL-ABC.png',
  './images/Virksomhedslogoer/Esnord_dk_logo.jpg',
  './images/Virksomhedslogoer/FE Logo.jpg',
  './images/Virksomhedslogoer/gartner gottlieb.png',
  './images/Virksomhedslogoer/HELBO_LOGO_FULL_CMYK.png',
  './images/Virksomhedslogoer/HT_logo_Eng_RGB_Black.png',
  './images/Virksomhedslogoer/Husmer_logo_Pantone_v.7.png',
  './images/Virksomhedslogoer/KNORD_FREDERIKSSUND_RGB_800px.png',
  './images/Virksomhedslogoer/Logo, MountainTop.png',
  './images/Virksomhedslogoer/logo_fotex_uden_outline_cmyk.png',
  './images/Virksomhedslogoer/Lomax Logo_ai.png',
  './images/Virksomhedslogoer/MN_logo_ Arkitekter_100_.png',
  './images/Virksomhedslogoer/Sillebroen-Logo-2016.png',
  './images/Virksomhedslogoer/Stark logo sammen bygger vi.jpg',
  './images/Virksomhedslogoer/Topsil.png',
  './images/Virksomhedslogoer/Trekloeverskolen_logo_web.jpg',
  './images/Virksomhedslogoer/Ungdomsskolen.jpg',
  './images/Virksomhedslogoer/UU Vest - Logo_juni2010.jpg',
  './images/Virksomhedslogoer/UUVest-logo-pos.jpg',
  './JSON/QuizSideData.JSON',
  './scripts/app.js',
  './scripts/calender.js',
  './scripts/Index.js',
  './scripts/jquery-3.3.1.js',
  './scripts/KarriereMuligeder.js',
  './scripts/materialize.js',
  './scripts/modernizr.js',
  './scripts/QuizSide.js',
  './scripts/UddannelseSide.js',
  './scripts/Virksomhedsside.js',
  './styles/Calender.css',
  './styles/Footer.css',
  './styles/Header.css',
  './styles/Index.css',
  './styles/KarriereMuligheder.css',
  './styles/QuizSide.css',
  './styles/StyleVirksomheder.css',
  './styles/UddannelseSide.css',
  './404.html',
  './calendar.html',
  './Farvekoder.txt',
  './index.html',
  './KarriereMuligheder.html',
  './Kasse1.html',
  './Kasse2.html',
  './Kasse3.html',
  './Kasse4.html',
  './manifest.json',
  './QuizSide.html',
  './service-worker.js',
  './UddannelseSide.html',
  './Virksomhedsside.html'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  console.log('[Service Worker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
