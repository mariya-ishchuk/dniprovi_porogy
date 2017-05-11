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
    gulpSequence = require('gulp-sequence'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    os = require('os'),
    inject = require('gulp-inject');

var browser = os.platform() === 'linux' ? 'google-chrome' : (
  os.platform() === 'darwin' ? 'google chrome' : (
  os.platform() === 'win32' ? 'chrome' : 'firefox'));

gulp.task('bowerfiles', function(cb) {
  pump([
    gulp.src(mainBowerFiles()),
    // uglify(),
    concat('vendor.min.js'),
    gulp.dest('dist/js/lib')
  ],
  cb);
});

gulp.task('js', function (cb) {
  pump([
    gulp.src([
      './app/*.js',
      './app/assets/js/*.js',
      './app/pages/**/*.js',
      './app/shared/**/*.js']),
    rename({dirname: ''}),
    // concat('app.js'),
    gulp.dest('dist/js')
  ],
  cb);
});

gulp.task('minify-js', function(cb) {
   pump([
    gulp.src('./dist/js/*.js'),
    // concat('app.js'),
    uglify(),
    gulp.dest('dist/js/')
  ],
  cb);
});

gulp.task('html', function() {
  return gulp.src([
      './app/index.html',
      './app/pages/**/*.html'
    ])
    .pipe(rename({dirname: ''}))
    .pipe(gulp.dest('dist'));
});

gulp.task('inject', function() {
  return gulp.src('./dist/*.html')
  .pipe(inject(gulp.src(['./dist/html/header.html']), {
    starttag: '<!-- inject:header:html -->',
    transform: function(filepath, file) {
     return file.contents.toString();
    }
  }))
  .pipe(inject(gulp.src(['./dist/html/footer.html']), {
    starttag: '<!-- inject:footer:html -->',
    transform: function(filepath, file) {
     return file.contents.toString();
    }
  }))
  .pipe(gulp.dest('dist'));
});
gulp.task('shared-html', function() {
  return gulp.src([
      './app/shared/**/*.html'
    ])
    .pipe(rename({dirname: ''}))
    .pipe(gulp.dest('dist/html'));
});

gulp.task('minify-html', function() {
  return gulp.src([
      './dist/*.html',
      './dist/html/*.html'
    ])
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
  return gulp.src([
      './app/*.css',
      './app/assets/styles/*.css',
      './app/pages/**/*.css',
      './app/shared/**/*.css'
    ])
    // .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
    // .pipe(concat('style.min.css'))
    .pipe(rename({dirname: ''}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('minify-css', function() {
  return gulp.src('./dist/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

// Fonts
gulp.task('fonts', function() {
  return gulp.src('./app/assets/fonts/*/*')
    .pipe(gulp.dest('dist/fonts/'));
});

// Fonts
gulp.task('images', function() {
  return gulp.src('./app/assets/images/*')
    // .pipe(imagemin({
    //   progressive: true,
    //   use: [pngquant()]
    // }))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('clean', function () {
  return del([
    'dist/*'
  ]);
});

gulp.task('reload', function () {
  return gulp.src('./dist/index.html')
    .pipe(connect.reload());
});


gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    livereload: true
  });
});

gulp.task('app', function() {
  var options = {
    uri: 'http://localhost:8080',
    app: browser
  };
  return gulp.src('./dist/index.html')
    .pipe(open(options));
});

gulp.task('watch', function () {
  return gulp.watch(
    [
      './app/*',
      './app/pages/**/*',
      './app/shared/**/*',
      './app/assets/js/*',
      './app/assets/styles/*',
    ],
    ['onWatchChange']);
});

gulp.task('onWatchChange', function(cb) {
  gulpSequence(['html', 'shared-html', 'js', 'css'], 'inject', 'reload')(cb);
});

gulp.task('dist', gulpSequence('bowerfiles', 'js', ['html', 'shared-html', 'css', 'fonts', 'images'], 'inject'));

gulp.task('minify', ['minify-js', 'minify-html', 'minify-css']);

gulp.task('default', gulpSequence('clean', 'dist', 'connect', 'watch', 'app'));

gulp.task('prod', gulpSequence('clean', 'dist', 'minify'));


