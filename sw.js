self.addEventListener('fetch', function(event) {
  
  // intercept image requests
  if(/\.jpg$/.test(event.request.url)) {
    event.respondWith(fetch('images/unicorn.jpg'));
  }

  // cache page
  toolbox.router.get('caching-page.html', function(event) {
    return caches.open('cachingpage').then(function(response) {
      return response.match(event.request).then(function(response) {
        return response || fetch(event.request);
      });
    }).catch(function() {
      return fetch(event.request);
    });
  });
});