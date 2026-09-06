// Service Worker for Kashish Beauty Parlour And Training Center PWA
// Provides offline support and caching

const BASE_PATH = '/kashishbeautyparlour';
const CACHE_NAME = 'kashish-v2';
const STATIC_CACHE = 'kashish-static-v2';
const DYNAMIC_CACHE = 'kashish-dynamic-v2';

// Assets to cache immediately
const STATIC_ASSETS = [
    `${BASE_PATH}/`,
    `${BASE_PATH}/offline.html`,
    `${BASE_PATH}/favicon.ico`,
    `${BASE_PATH}/icon.png`,
    `${BASE_PATH}/apple-touch-icon.png`,
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then((cache) => {
                console.log('Caching static assets');
                return cache.addAll(STATIC_ASSETS);
            })
            .catch((err) => console.log('Install error:', err))
    );
    self.skipWaiting();
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter((key) => key !== CACHE_NAME && key !== STATIC_CACHE && key !== DYNAMIC_CACHE)
                    .map((key) => caches.delete(key))
            );
        })
    );
    self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);

    // Skip non-GET requests
    if (request.method !== 'GET') return;

    // Skip API routes - always fetch fresh
    if (url.pathname.startsWith(`${BASE_PATH}/api/`) || url.pathname.startsWith('/api/')) return;

    // Handle navigation requests
    if (request.mode === 'navigate') {
        event.respondWith(
            fetch(request)
                .catch(() => caches.match(`${BASE_PATH}/offline.html`))
        );
        return;
    }

    // Cache-first for static assets
    if (url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2)$/)) {
        event.respondWith(
            caches.match(request)
                .then((cachedResponse) => {
                    if (cachedResponse) return cachedResponse;
                    return fetch(request).then((response) => {
                        if (!response || response.status !== 200) return response;
                        const responseClone = response.clone();
                        caches.open(STATIC_CACHE).then((cache) => {
                            cache.put(request, responseClone);
                        });
                        return response;
                    });
                })
        );
        return;
    }

    // Network-first for HTML pages
    event.respondWith(
        fetch(request)
            .then((response) => {
                if (!response || response.status !== 200) return response;
                const responseClone = response.clone();
                caches.open(DYNAMIC_CACHE).then((cache) => {
                    cache.put(request, responseClone);
                });
                return response;
            })
            .catch(() => caches.match(request))
    );
});

// Push notification handling
self.addEventListener('push', (event) => {
    const data = event.data ? event.data.json() : {};
    const title = data.title || 'Kashish Beauty Parlour And Training Center';
    const options = {
        body: data.body || 'You have a new notification',
        icon: `${BASE_PATH}/icon.png`,
        badge: `${BASE_PATH}/icon.png`,
        vibrate: [100, 50, 100],
        data: {
            url: data.url || `${BASE_PATH}/`,
        },
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(
        clients.openWindow(event.notification.data.url)
    );
});

// Background sync for form submissions
self.addEventListener('sync', (event) => {
    if (event.tag === 'booking-sync') {
        console.log('Background sync: booking-sync');
    } else if (event.tag === 'contact-sync') {
        console.log('Background sync: contact-sync');
    }
});

console.log('Service Worker loaded');
