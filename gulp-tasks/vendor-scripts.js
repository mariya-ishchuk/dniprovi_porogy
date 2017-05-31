module.exports = function (gulp, plugins, options) {
  return function(cb) {
    plugins.pump([
      gulp.src(plugins.mainBowerFiles()),
      plugins.if(options.isProd, plugins.uglify()),
      plugins.concat("vendor.min.js"),
      gulp.dest("dist/js/lib")
    ],
    cb);
  };
};