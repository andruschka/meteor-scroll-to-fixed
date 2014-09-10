Package.describe({
  summary: "ScrolltoFixed.js, fix elements on the page",
  version: "0.0.2",
  git: "https://github.com/andruschka/meteor-scroll-to-fixed.git"
});

Package.on_use(function(api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use(['jquery'], 'client');
  api.add_files(
    [
      'scroll-to-fix.js'
    ]
    , 'client'
  );
});