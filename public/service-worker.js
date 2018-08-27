var dataCacheName = 'template-pwa';
var cacheName = 'template-pwa';
var filesToCache = [
  '/',
 "./fonts",

 "./images",
 "./images/icons",
 "./images/CampusDagXL(1).png",
 "./images/CampusDagXL(2).png",
 "./images/CampusDagXL(3).png",
 "./images/CampusDagXL(4).png",
 "./images/fe_tekstlogo5.jpg",
 "./images/funky-lines.png",
 "./images/img1.jpg",
 "./images/img2.jpg",
 "./images/img3.jpg",
 "./images/img4.jpg",
 "./images/img5.jpg",
 "./images/img6.jpg",
 "./images/Logo.png",
 "./images/Logo2.png",
 "./images/Logo-footer.png",


 "./index.html",
 "./Virksomhedsside.html",
 "./manifest.json",
 "./scripts",
 "./scripts/app.js",
 "./scripts/jquery-3.3.1.js",
 "./scripts/materialize.js",
 "./service-worker.js",
 "./styles",
 "./styles/materialize.css",
 "./styles/Style.css"
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
