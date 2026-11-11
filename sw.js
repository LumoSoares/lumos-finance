const CACHE='lumos-v1.12';
const CORE=['./','./index.html','./config.js','./manifest.webmanifest','./icon-192.png','./icon-512.png','./logo-lumos-dollar.webp'];
self.addEventListener('install',event=>{self.skipWaiting();event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)))});
self.addEventListener('activate',event=>event.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))),self.clients.claim()])));
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;const request=event.request;event.respondWith(fetch(request).then(response=>{if(response&&response.ok&&new URL(request.url).origin===location.origin){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(request,copy))}return response}).catch(async()=>{const cached=await caches.match(request,{ignoreSearch:true});return cached||caches.match('./index.html')}))});
