var gulp = require("gulp"),
    $ = require("gulp-load-plugins")({
      pattern: ["*"],
      replaceString: /\bgulp[\-.]/,
      lazy: true,
      camelize: true
    });

function getTask(task, options) {
  return require('./gulp-tasks/' + task)(gulp, $, options ? options : {});
}

function addExtToPath(path, ext) {
  var flatPath;
  if (Object.prototype.toString.call(path) == "[object Array]") {
    flatPath = path.map(function(el, ind) {
      return [el, ".", ext].join("");
    });
  } else {
    flatPath = [path, ".", ext].join("");
  }
  return flatPath;
};

var options = {
  isProd: $.yargs.argv && $.yargs.argv._ && $.yargs.argv._[0] == "prod",
  addExtToPath: addExtToPath,
  callWatchSequence: function(cb) {
    return $.sequence(["html", "js", "css"], "inject", "reload")(cb);
  }
};

gulp.task('bowerfiles', getTask('vendor-scripts', options));
gulp.task("js", getTask("scripts", options));

gulp.task("html", getTask("html", options));
gulp.task("inject", getTask("inject-html", options));

gulp.task("css", getTask("css", options));

gulp.task("assets", getTask("assets", options));

gulp.task("dev-server", getTask("dev-server", options));

gulp.task("reload", function () {
  return gulp.src("./dist/index.html")
    .pipe($.connect.reload());
});

gulp.task("clean", function () {
  return $.del([
    "dist/*"
  ]);
});

gulp.task("dist", $.sequence("bowerfiles", "js", ["html", "css", "assets"], "inject"));

gulp.task("default", $.sequence("clean", "dist", "dev-server"));

gulp.task("prod", $.sequence("clean", "dist"));


