const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const pug = require("gulp-pug");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const vinylPaths = require("vinyl-paths");
const uglify = require("gulp-uglify");
const del = require("del");
const gprint = require("gulp-print").default;

sass.compiler = require("node-sass");

const paths = {
  src: {
    jsEntry: "src/js/main.js",
    js: "src/js/**/*.js",
    pug: "src/templates/**/*.pug",
    scss: "src/scss/**/*.scss",
  },
  dest: {
    base: "./dest",
    js: "dest/js/",
    html: "dest/pages/",
    css: "dest/css/",
  },
};

gulp.task("clean", () => {
  return gulp.src(`${paths.dest.base}`).pipe(gprint()).pipe(vinylPaths(del));
});

gulp.task("sass", function () {
  return gulp
    .src(paths.src.scss)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.dest.css));
});

gulp.task("pug", function () {
  return gulp.src(paths.src.pug).pipe(pug({})).pipe(gulp.dest(paths.dest.html));
});

gulp.task("javascript", function () {
  var b = browserify({
    entries: paths.src.jsEntry,
    debug: true,
    plugin: [[require("esmify")]],
  });

  return b
    .bundle()
    .pipe(source("main.js"))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.dest.js));
});

gulp.task("watch", function () {
  gulp.watch(paths.src.pug, { ignoreInitial: false }, gulp.series("pug"));
  gulp.watch(paths.src.scss, { ignoreInitial: false }, gulp.series("sass"));
  gulp.watch(paths.src.js, { ignoreInitial: false }, gulp.series("javascript"));
});

exports.watch = gulp.series("clean", "watch");
