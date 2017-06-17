module.exports = function (gulp, plugins, options) {
  return function() {
    var fonts = gulp.src("./app/assets/video/*")
      .pipe(gulp.dest("dist/video/"));

    var videos = gulp.src("./app/assets/fonts/*/*")
      .pipe(gulp.dest("dist/fonts/"));

    var images = gulp.src("./app/assets/images/*")
      .pipe(plugins.if(
        options.isProd,
        plugins.imagemin({
          progressive: true,
          use: [plugins.imageminPngquant()]
        })
      ))
      .pipe(gulp.dest("dist/images"));

    return plugins.mergeStream(fonts, images);
  };
};