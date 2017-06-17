module.exports = function (gulp, plugins, options) {
  return function (cb) {
    plugins.pump([
      gulp.src([
        "./app/*.js",
        "./app/assets/js/*.js",
        "./app/pages/**/*.js",
        "./app/shared/**/*.js"]),
      plugins.rename({dirname: ""}),
      // plugins.if(options.isProd, plugins.uglify()),
      gulp.dest("dist/js")
    ],
    cb);
  };
};