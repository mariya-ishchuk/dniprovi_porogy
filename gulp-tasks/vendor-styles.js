module.exports = function (gulp, plugins, options) {
  return function(cb) {
    plugins.pump([
      gulp.src(plugins.mainBowerFiles()),
      // plugins.debug(),
      plugins.filter('**/**/*.css'),
      plugins.cleanCss({compatibility: "ie8"}),
      // plugins.sass().on('error', plugins.sass.logError),
      plugins.concat("vendor.min.css"),
      gulp.dest("dist/css")
    ],
    cb);
  };
};