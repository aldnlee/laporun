// public/sw.js
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// Logic kosong ini cukup untuk menipu browser agar menganggap 
// aplikasi ini aktif dan menjaga koneksi GPS tetap "warm"
self.addEventListener('fetch', (event) => {
  // Biarkan request lewat seperti biasa
});