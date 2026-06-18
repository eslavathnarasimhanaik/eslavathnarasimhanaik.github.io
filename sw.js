self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.delete('static-assets-v1').then(function() {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});
