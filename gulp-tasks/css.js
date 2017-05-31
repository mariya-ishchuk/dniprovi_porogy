module.exports = function (gulp, plugins, options) {
  return function() {
    var src = [
      "./app/*",
      "./app/assets/styles/*",
      "./app/pages/**/*",
      "./app/shared/**/*"
    ];

    var lessStream = gulp.src(options.addExtToPath(src, "less"))
      .pipe(plugins.less().on("error", function(err) {console.log(err)}));

    return plugins.mergeStream(lessStream, gulp.src(options.addExtToPath(src, "css")))
      .pipe(plugins.autoprefixer("last 2 version", "safari 5", "ie 8", "ie 9"))
      .pipe(plugins.if(options.isProd, plugins.cleanCss({compatibility: "ie8"})))
      .pipe(plugins.rename({dirname: ""}))
      .pipe(gulp.dest("dist/css"));
  };
};