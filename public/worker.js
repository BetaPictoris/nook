var CACHE_NAME = 'nook-pwa';
var urlsToCache = [
  '/',
  '/index.html',
  
  'https://cdn.ozx.me/fonts/Fontworks/Japanese/Round-Gothic/SeuratPro-B.otf',
  'https://cdn.ozx.me/fonts/Fontworks/Japanese/Gothic/RodinBokutohPro-EB.otf',

  'https://cdn.ozx.me/ac/new-horizons/music/clear/0.ogg',
  'https://cdn.ozx.me/ac/new-horizons/music/clear/1.ogg',
  'https://cdn.ozx.me/ac/new-horizons/music/clear/2.ogg',
  'https://cdn.ozx.me/ac/new-horizons/music/clear/3.ogg',
  'https://cdn.ozx.me/ac/new-horizons/music/clear/4.ogg',
  'https://cdn.ozx.me/ac/new-horizons/music/clear/5.ogg',
  'https://cdn.ozx.me/ac/new-horizons/music/clear/6.ogg',
  'https://cdn.ozx.me/ac/new-horizons/music/clear/7.ogg',
  'https://cdn.ozx.me/ac/new-horizons/music/clear/8.ogg',
  'https://cdn.ozx.me/ac/new-horizons/music/clear/9.ogg',
  'https://cdn.ozx.me/ac/new-horizons/music/clear/10.ogg',
  'https://cdn.ozx.me/ac/new-horizons/music/clear/11.ogg',
  'https://cdn.ozx.me/ac/new-horizons/music/clear/12.ogg',
  'https://cdn.ozx.me/ac/new-horizons/music/clear/13.ogg',
  'https://cdn.ozx.me/ac/new-horizons/music/clear/14.ogg',
  'https://cdn.ozx.me/ac/new-horizons/music/clear/15.ogg',
  'https://cdn.ozx.me/ac/new-horizons/music/clear/16.ogg',
  'https://cdn.ozx.me/ac/new-horizons/music/clear/17.ogg',
  'https://cdn.ozx.me/ac/new-horizons/music/clear/18.ogg',
  'https://cdn.ozx.me/ac/new-horizons/music/clear/19.ogg',
  'https://cdn.ozx.me/ac/new-horizons/music/clear/20.ogg',
  'https://cdn.ozx.me/ac/new-horizons/music/clear/21.ogg',
  'https://cdn.ozx.me/ac/new-horizons/music/clear/22.ogg',
  'https://cdn.ozx.me/ac/new-horizons/music/clear/23.ogg',
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