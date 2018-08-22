let mix = require('laravel-mix');

mix.browserSync({proxy: 'http://localhost:8080'});


// mix.styles([
//   'resources/assets/css/lib/*'
// ], 'public/css/all.css');

// mix.js('resources/assets/js/app.js', 'public/js').sourceMaps().version();
// mix.js('resources/assets/js/register.js', 'public/js').sourceMaps().version();
// mix.js('resources/assets/js/library.js', 'public/js').sourceMaps().version();
// mix.js('resources/assets/js/lib/dropzone.js', 'public/js/lib').sourceMaps().version();
// mix.js('resources/assets/js/admin.js', 'public/js').sourceMaps().version();
// mix.js('resources/assets/js/upgrade.js', 'public/js').sourceMaps().version();
// mix.js('resources/assets/js/account.js', 'public/js').sourceMaps().version();
// mix.js('resources/assets/js/pricingTable.js', 'public/js').sourceMaps().version();
// mix.js('resources/assets/js/marketingPages.js', 'public/js').sourceMaps().version();
// mix.js('resources/assets/js/userDownloadsLibrary.js', 'public/js').sourceMaps().version();
// mix.sass('resources/assets/sass/custom.sass', 'public/css');

if (mix.inProduction()) {
  mix.version();
}
