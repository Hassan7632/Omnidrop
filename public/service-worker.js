const CACHE_NAME = "pwa-cache-v1";
const urlsToCache = [
  "/index.html",
  "/style.css",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png"
];

// Install the service worker and cache assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch resources and serve from cache
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
