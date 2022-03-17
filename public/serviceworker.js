const toBeCached = [];
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").then(
      (registration) => {
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      (err) => {
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("model_data").then((cache) => {
      console.log("caching");
      return cache.addAll(toBeCached);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        // console.log('available :)');
      }
      return response || fetch(event.request);
    })
  );
});
