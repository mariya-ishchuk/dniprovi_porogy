module.exports = function (gulp, plugins, options) {
  return  function() {
    var html = gulp.src(["./app/*.html", "./app/pages/**/*.html"])
      .pipe(plugins.if(options.isProd, plugins.htmlmin({collapseWhitespace: true})))
      .pipe(plugins.rename({dirname: ""}));

    var sharedHtml = gulp.src(["./app/shared/**/*.html"])
      .pipe(plugins.if(options.isProd, plugins.htmlmin({collapseWhitespace: true})))
      .pipe(plugins.rename({dirname: "html"}));

    return plugins.mergeStream(html, sharedHtml)
      .pipe(gulp.dest("dist"));
  };
};