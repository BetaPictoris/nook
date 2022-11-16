var CACHE_NAME = 'nook-pwa';
var urlsToCache = [
  '/',
  '/index.html',
  
  'https://cdn.ozx.me/fonts/Fontworks/Japanese/Round-Gothic/SeuratPro-B.otf',
  'https://cdn.ozx.me/fonts/Fontworks/Japanese/Gothic/RodinBokutohPro-EB.otf',

  'https://cdn.ozx.me/ac/nh/9.',
];

// Install a service worker
self.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Cache and return requests
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Update a service worker
self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
  caches.open(CACHE_NAME)
    .then(function(cache) {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});