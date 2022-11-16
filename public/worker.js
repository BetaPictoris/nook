var CACHE_NAME = 'nook-pwa';
var urlsToCache = [
  '/',
  '/index.html',
  
  'https://cdn.ozx.me/fonts/Fontworks/Japanese/Round-Gothic/SeuratPro-B.otf',
  'https://cdn.ozx.me/fonts/Fontworks/Japanese/Gothic/RodinBokutohPro-EB.otf',
  'https://cdn.ozx.me/sounds/rain.ogg',
];

const games = ["new-horizons", "new-leaf", "population-growing", "wild-world"]
const noWeatherSupport = ["population-growing", "new-horizons"];

for (let i = 0; i < games.length; i++) {
  for (let x = 0; i < 24; x++) {
    urlsToCache.push("https://cdn.ozx.me/ac/" + games[i] + "/music/clear/" + x + ".ogg")
    if (!noWeatherSupport.includes(games[i])) {
      urlsToCache.push("https://cdn.ozx.me/ac/" + games[i] + "/music/rainy/" + x + ".ogg")
      urlsToCache.push("https://cdn.ozx.me/ac/" + games[i] + "/music/snowy/" + x + ".ogg")
    }
  }
}

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