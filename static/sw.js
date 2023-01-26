// Import Workbox Script
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

// Import Workbox
import { registerRoute, setCatchHandler } from 'workbox-routing';
import { precacheAndRoute } from 'workbox-precaching';
import { NetworkFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';

// precache all files
precacheAndRoute(self.__WB_MANIFEST);

// Register a route for all other requests
registerRoute(
  ({ request }) => request.destination === 'document',
  new NetworkFirst({
    cacheName: 'html-cache',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 7,
        maxEntries: 20
      })
    ]
  })
);

// Register a route for all other assets
registerRoute(
  ({ request }) => request.destination !== 'document',
  new StaleWhileRevalidate({
    cacheName: 'assets-cache',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 14,
        maxEntries: 50
      })
    ]
  })
);

// Add a fallback for offline page
setCatchHandler(async ({ event }) => {
    // You can use the precached files to show an offline page 
    return caches.match('/offline');
});
