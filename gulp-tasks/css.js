module.exports = function (gulp, plugins, options) {
  return function() {
    var src = [
      "./app/assets/styles/*",
      "./app/shared/**/*",
      "./app/pages/**/*",
      "./app/*"
    ];

    var lessStream = gulp.src(options.addExtToPath(src, "less"))
      .pipe(plugins.less()
        .on("error", function(err) {
          console.log(err.toString());
          this.emit('end');
        })
      );

    return plugins.mergeStream(gulp.src(options.addExtToPath(src, "css")), lessStream)
      // .pipe(plugins.if(options.isProd, plugins.cleanCss({compatibility: "ie8"})))
      .pipe(plugins.concat("main.css"))
      .pipe(plugins.csslint())
      .pipe(plugins.csslint.formatter())
      .pipe(plugins.autoprefixer("last 2 version", "safari 5", "ie 8", "ie 9"))
      // .pipe(plugins.rename({dirname: ""}))
      .pipe(gulp.dest("dist/css"));
  };
};