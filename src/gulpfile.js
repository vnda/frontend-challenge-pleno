const gulp = require('gulp');
const sass = require('gulp-sass');
const html = require('gulp-htmlmin');

sass.compiler = require('node-sass');

function minifyHTML() {
  return gulp
    .src('index.html')
    .pipe(
      html({
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
      })
    )
    .pipe(gulp.dest('../dist'));
}

function minifyCSS() {
  return gulp
    .src('scss/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .on('error', sass.logError)
    .pipe(gulp.dest('../dist/css'));
}

exports.default = gulp.series(minifyHTML, minifyCSS);

// exports.default = gulp.task('default', minifyCSS);
