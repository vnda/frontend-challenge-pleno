const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync')
const del = require('del')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const csso = require('gulp-csso')
const modifyHTMLlinks = require('gulp-processhtml')
const mode = require('gulp-mode')()
const sourcemaps = require('gulp-sourcemaps')
const htmlmin = require('gulp-htmlmin')
const autoprefixer = require('gulp-autoprefixer')

//clean task
const clean = async () => {
  return await del(['./dist/*'])
}

// style task
const style = () => {
  return gulp
    .src('./src/scss/*.scss')

    .pipe(mode.development(sourcemaps.init()))

    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(rename('style.css'))
    .pipe(mode.production(csso()))
    .pipe(mode.development(sourcemaps.write()))
    .pipe(gulp.dest('./dist/assets/css'))
    .pipe(mode.development(browserSync.stream()))
}

// js task
const js = () => {
  return gulp
    .src('./src/js/*.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./dist/assets/js'))
}

// html task
const html = () => {
  return gulp
    .src(['./*.html'])
    .pipe(modifyHTMLlinks())
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true
      })
    )
    .pipe(gulp.dest('./dist'))
}

// Static server
const watch = () => {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
  gulp.watch('./src/scss/**/*.scss', style)
  gulp.watch('./src/js/*.js', js)
  gulp.watch('./*.html').on('change', browserSync.reload)
  gulp.watch('./src/js/*.js').on('change', browserSync.reload)
}

exports.style = style
exports.build = gulp.series(clean, gulp.parallel(style, js, html))
exports.default = gulp.series(clean, gulp.parallel(style, js, html), watch)
