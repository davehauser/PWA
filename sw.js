self.addEventListener('fetch', function(event) {
  console.log('Resource requested is: ', event.request.url);
});