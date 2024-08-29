self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('noticias-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/script.js',
        '/manifest.json',
        '/icon192x192.png',
        '/icon512x512.png',
      ]);
    })
  );
});
 
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});