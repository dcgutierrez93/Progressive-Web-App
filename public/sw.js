// Install Service Worker
self.addEventListener('install', function (event) {
    console.log("[Service Worker] installing service worker...", event);
});

// Activate Service Worker
self.addEventListener('activate', function (event) {
    console.log("[Service Worker] activating service worker...", event);
    return self.clients.claim();
});
