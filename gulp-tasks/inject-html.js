module.exports = function (gulp, plugins, options) {
  return function() {
    return gulp.src("./dist/*.html")
    .pipe(plugins.inject(gulp.src(["./dist/html/header.html"]), {
      starttag: "<!-- inject:header:html -->",
      transform: function(filepath, file) {
       return file.contents.toString();
      }
    }))
    .pipe(plugins.inject(gulp.src(["./dist/html/footer.html"]), {
      starttag: "<!-- inject:footer:html -->",
      transform: function(filepath, file) {
       return file.contents.toString();
      }
    }))
    .pipe(gulp.dest("dist"));
  };
};