/* Static shell only. Network-first, offline fallback; never caches user screenshots, files or user-specific API data. */
const CACHE='niveshpath-static-v20261029-3';
const SHELL=['./','./index.html','./styles.css','./curriculum.js','./adaptive.js','./app.js','./experience.js','./favicon.svg','./jeetaksh.jpg','./sakshi.jpg'];
self.addEventListener('install', event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(SHELL)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('niveshpath-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;event.respondWith(fetch(event.request).then(res=>{if(res.ok){const copy=res.clone();event.waitUntil(caches.open(CACHE).then(cache=>cache.put(event.request,copy)));}return res;}).catch(()=>caches.match(event.request).then(hit=>hit||caches.match('./index.html'))));});
