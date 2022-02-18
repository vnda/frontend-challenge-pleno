const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const replace = require('gulp-replace') ;
const { init } = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const postcss = require('gulp-postcss');
const browserSync = require('browser-sync').create();

const files = {
  scssPath: './src/assets/styles/**/*.scss',
  jsPath: './src/scripts/**/*.js',
  htmlPath: './src/*.html',
  imgPath: './src/assets/images/**/*{.png,.jpg,.jpeg,.svg,.webp}',
}

// Sass task
const scssTask = () => {
  return src(files.scssPath)
    .pipe(init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([ autoprefixer(), cssnano() ]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./dist/assets/css'))
    .pipe(browserSync.stream());
};

// JS task
const jsTask = () => {
  return src(files.jsPath)
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(dest('./dist/js'))
    .pipe(browserSync.stream());
};

// Html task
const htmlTask = () => {
  return src(files.htmlPath)
    .pipe(dest('./dist'))
    .pipe(browserSync.stream());
}

// img task
const imgTask = () => {
  return src(files.imgPath)
    .pipe(imagemin())
    .pipe(dest('./dist/assets/images'))
    .pipe(browserSync.stream());
}

// Watch task
const watchTask = () => {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });

  watch(
    [files.scssPath, files.jsPath], 
    parallel(scssTask, jsTask)
  );

  watch(
    files.htmlPath, 
    htmlTask
  ).on('change', browserSync.reload);
  
  watch(
    [files.imgPath], 
    imgTask
  );
};


// Default Task
exports.default = series(
  parallel(scssTask, jsTask),
  watchTask
);

