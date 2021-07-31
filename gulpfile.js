const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const htmlmin = require("gulp-htmlmin");


// FROM SSAS TO CSS
function buildStyles() {
  return gulp
    .src("./src/sass/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./src/css"));
}

gulp.task("sass", buildStyles);

// CSS MINIFY
function cssMin() {
  return gulp
    .src("./src/css/*.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("dist/css"));
}

gulp.task("minify-css", cssMin);

// UGLIFY JS
function uglifyJs() {
  return gulp
  .src("./src/js/index.js")
  .pipe(uglify())
  .pipe(gulp.dest("dist/js"))
}

gulp.task("uglify", uglifyJs);

// HTML MINIFY
function htmlMin() {
  return gulp
    .src("./src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist"));
}

gulp.task("html-min", htmlMin);

function watch() {
  gulp.watch("./src/sass/*.scss", buildStyles);
  gulp.watch("./src/css/*.css", cssMin);
  gulp.watch("./src/js/index.js", uglifyJs);
  gulp.watch("./src/*.html", htmlMin);
}

gulp.task("default", watch);
