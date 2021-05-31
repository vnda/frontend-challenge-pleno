const gulp = require('gulp');
const { series } = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const order = require('gulp-order');
const uglify = require('gulp-uglify');

gulp.task('css', function() {
  return gulp.src('src/scss/*.scss')
  .pipe(order([
    "reset.scss",
    "fonts.scss",
    "base.scss",
    "container.scss",
    "layout.scss",
  ]))
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('style.css'))
  .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function() {
  return gulp.src('src/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'));
});

gulp.task('html', function() {
  return gulp.src('src/index.html')
  .pipe(gulp.dest('dist'));
});

gulp.task('img', function() {
  return gulp.src('src/img/*')
  .pipe(gulp.dest('dist/img'));
});

gulp.task('fonts', function() {
  return gulp.src('src/fonts/*')
  .pipe(gulp.dest('dist/fonts'));
});

gulp.task('default', gulp.series('css', 'js', 'html', 'img', 'fonts'));
