// Install Service Worker
self.addEventListener('install', function (event) {
    console.log("[Service Worker] installing service worker...", event);
});

// Activate Service Worker - must restart tab in developer tools application
self.addEventListener('activate', function (event) {
    console.log("[Service Worker] activating service worker...", event);
    return self.clients.claim();
});

// =============================================================================

// Fetch Event Service Worker
self.addEventListener('fetch', function (event) {
    console.log("[Service Worker] Fetching something...", event);
    event.respondWith(fetch(event.request));
});
