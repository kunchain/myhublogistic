/* Myhublogistic Manager — offline service worker */
var CACHE = 'myhub-v1';
var ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys()
      .then(function (keys) { return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); })); })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  /* Navigations: network-first so updates arrive, cache fallback when offline */
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request).then(function (res) {
        try { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put('./index.html', copy); }); } catch (err) {}
        return res;
      }).catch(function () { return caches.match('./index.html'); })
    );
    return;
  }
  /* Everything else (icons, fonts): cache-first, then network */
  e.respondWith(
    caches.match(e.request).then(function (hit) {
      return hit || fetch(e.request).then(function (res) {
        if (res.ok && new URL(e.request.url).origin === self.location.origin) {
          try { var copy = res.clone(); caches.open(CACHE).then(function (c) { c.put(e.request, copy); }); } catch (err) {}
        }
        return res;
      });
    })
  );
});
