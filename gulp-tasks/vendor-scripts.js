module.exports = function (gulp, plugins, options) {
  return function(cb) {
    const f = plugins.filter(["**/**/*.js", "!**/**/jquery.js"], {restore: true});
    const rest = plugins.filter(["**/**/*.js"]);

    plugins.pump([
      gulp.src(plugins.mainBowerFiles()),
      f,
      plugins.concat("vendor.min.js"),
      f.restore,
      rest,
      plugins.if(options.isProd, plugins.uglify()),
      gulp.dest("dist/js/lib")
    ],
    cb);
  };
};