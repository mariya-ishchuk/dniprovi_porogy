var gulp = require('gulp'),
    connect = require('gulp-connect'),
    open = require('gulp-open')
    htmlmin = require('gulp-htmlmin'),
    uglify = require('gulp-uglify');
    pump = require('pump'),
    del = require('del'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    mainBowerFiles = require('main-bower-files'),
    gulpSequence = require('gulp-sequence')
    imagemin = require('gulp-imagemin');

gulp.task('bowerfiles', function(cb) {
  pump([
    gulp.src(mainBowerFiles()),
    // uglify(),
    concat('vendor.min.js'),
    gulp.dest('dist/js/vendor')
  ],
  cb)
});

gulp.task('js', function (cb) {
   pump([
        gulp.src('./assets/js/*.js'),
        concat('app.js'),
        // uglify(),
        gulp.dest('dist/js/')
    ],
    cb
  );
});

gulp.task('html', function() {
  return gulp.src('./*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('minify-html', function() {
  return gulp.src('./dist/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('reload', function () {
  return gulp.src('./dist/index.html')
    .pipe(connect.reload());
});

gulp.task('css', function() {
  return gulp.src([
      './assets/css/reset.css',
      './assets/css/carousel.css',
      './assets/css/font-awesome.css',
      './assets/css/nature-history.css',
      './assets/css/main.css'])
    // .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('dist/css'));
});

// Fonts
gulp.task('fonts', function() {
  return gulp.src([
    './assets/fonts/*/*'])
    .pipe(gulp.dest('dist/fonts'));
});

// Fonts
gulp.task('img', function() {
  return gulp.src(['./assets/img/*'])
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    livereload: true
  });
});

gulp.task('app', function(){
  var options = {
    uri: 'http://localhost:8080',
    app: 'chrome'
  };
  return gulp.src('./dist/index.html')
    .pipe(open(options));
});

gulp.task('watch', function () {
  return gulp.watch(['./*.html', './assets/js/main.js', './assets/css/*'], ['onWatchChange']);
});

gulp.task('clean', function () {
  return del([
    'dist/*'
  ]);
});

gulp.task('onWatchChange', function(cb) {
  gulpSequence(['html', 'js', 'css'], 'reload')(cb);
});

gulp.task('dist', gulpSequence('bowerfiles', 'js', ['html', 'css', 'fonts', 'img']));

gulp.task('default', gulpSequence('clean', 'dist', 'connect', 'watch', 'app'));

gulp.task('prod', gulpSequence('clean', 'dist'));


