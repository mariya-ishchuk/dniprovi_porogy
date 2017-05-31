module.exports = function (gulp, plugins, options) {
  return function() {

    var connect = plugins.connect.server({
      root: "dist",
      livereload: true
    });

    var arr = [
      "./app/*",
      "./app/pages/**/*",
      "./app/shared/**/*",
      "./app/assets/**/*",
    ];
    var watch = plugins.watch(arr, (function (event) {
      console.log("changed file ->", event)
      return gulp.start("onWatchChange");
    }));

    var file = plugins.yargs.argv.file && plugins.yargs.argv.file !== true
      ? ~plugins.yargs.argv.file.indexOf(".html")
        ? plugins.yargs.argv.file
        : [plugins.yargs.argv.file, ".html"].join("")
      : "";
    var browser = plugins.os.platform() === "linux" ? "google-chrome" : (
      plugins.os.platform() === "darwin" ? "google chrome" : (
      plugins.os.platform() === "win32" ? "chrome" : "firefox"));
    var openOptions = {
      uri: ["http://localhost:8080/", file].join(""),
      app: browser
    };

    var app = gulp.src("./dist/index.html")
      .pipe(plugins.open(openOptions));

    gulp.task("reload", function () {
      return gulp.src("./dist/index.html")
        .pipe(plugins.connect.reload());
    });

    gulp.task("onWatchChange", function(cb) {
      console.log(options.watchSequence);
      plugins.sequence.apply(this, options.watchSequence)(cb);
    });

    return app;
  };
};