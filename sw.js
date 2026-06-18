self.addEventListener('install', function(event) {
  // Pre-cache the avatar image with a long TTL
  event.waitUntil(
    caches.open('static-assets-v1').then(function(cache) {
      return cache.addAll([
        'https://avatars.githubusercontent.com/u/164381248?v=4'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  const url = new URL(event.request.url);
  // Apply cache‑first strategy for the avatar image
  if (url.origin === 'https://avatars.githubusercontent.com') {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request).then(function(networkResponse) {
          // Clone response and store in cache for future visits
          const cloned = networkResponse.clone();
          caches.open('static-assets-v1').then(function(cache) {
            cache.put(event.request, cloned);
          });
          return networkResponse;
        });
      })
    );
    return;
  }
  // For all other requests, use default network behavior
  return;
});
