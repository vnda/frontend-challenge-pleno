var gulp = require("gulp"),
  sass = require('gulp-sass'),
  rename = require('gulp-rename'),
  plumber = require('gulp-plumber'),
  minifycss = require('gulp-minify-css'),
  config = require('./gulpconfig.json'),
  uglify = require('gulp-uglify'),
  imagemin = require("gulp-imagemin"),
  { watch } = require('gulp');


const browserSync = require('browser-sync');

// CSS
function css(cb) {
  gulp.src([config.folder.sass + '/**/main.scss'])
  .pipe(plumber({
      errorHandler: function(error) {
          this.emit('end');
      }
  }))
  .pipe(sass())
  .pipe(rename({ basename: config.folder.default_name }))
  .pipe(gulp.dest(config.folder.srccss))
  .pipe(rename({
      basename: config.folder.default_name,
      suffix: '.min'
  }))
  .pipe(minifycss())
  .pipe(gulp.dest(config.folder.css))
  .pipe(browserSync.reload({ stream: true }))
cb();
}

// JS
function js(cb) {
  gulp.src('assets/js/src/main.js')
  .pipe(plumber({
      errorHandler: function(error) {
          this.emit('end');
      }
  }))
  .pipe(uglify({
      mangle: {
          toplevel: true
      }
  }))            
  .pipe(rename({
      basename: config.folder.default_name,
      suffix: '.min'
  }))
  .pipe(gulp.dest(config.folder.javascript))     
  .pipe(browserSync.reload({ stream: true }))         
cb();
}

gulp.task("build-img", function (done) {
  gulp.src("assets/img/**/*")    
    .pipe(imagemin())
    .pipe(gulp.dest("assets/img"));
    done();
});

exports.default = function() { 
  // Task css
  watch(config.folder.sass + '/**/*.scss', css);
  // Task JS
  watch('assets/js/src/main.js', js);
};