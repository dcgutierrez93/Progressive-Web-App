var deferedPrompt;
// Setting up Service Worker - In the root folder service worker will apply to all pages of the application
// *** Must be served on Https ***
if ('serviceWorker' in navigator) {
    // Register a new Service Worker
    navigator.serviceWorker
        .register('/sw.js')
        .then(function () {
            console.log("Service Worker Registered");
        });
}

window.addEventListener('beforeinstallprompt', function (event) {
    console.log("beforeinstallprompt fired");
    event.preventDefault();
    deferedPrompt = event;
    return false;
});
