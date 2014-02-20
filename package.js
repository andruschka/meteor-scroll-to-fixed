Package.describe({
  summary: "ScrolltoFixed.js, fix elements on the page"
});

Package.on_use(function(api) {
  api.use(['jquery'], 'client');
  api.add_files(
    [
      'scroll-to-fix.js'
    ]
    , 'client'
  );
});