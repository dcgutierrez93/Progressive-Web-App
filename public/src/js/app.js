// Setting up Service Worker
if ('serviceWorker' in navigator) {
    // Register a new Service Worker
    navigator.serviceWorker
        .register('/sw.js')
        .then(function () {
            console.log("Service Worker Registered");
        });
}
