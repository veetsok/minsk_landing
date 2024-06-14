const gulp = require("gulp");
const fileInclude = require("gulp-file-include");
const concat = require("gulp-concat");

// Задача для HTML файлов
gulp.task("html", function () {
  return gulp
    .src(["src/*.html"])
    .pipe(
      fileInclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(gulp.dest("dist"));
});

// Задача для объединения CSS файлов
gulp.task("styles", function () {
  return gulp
    .src([
      "src/style.css",
      "src/reset.css",
      "src/components/main/main.css",
      // "src/fonts.css",
      "src/mobile.css",
    ])
    .pipe(concat("style.css"))
    .pipe(gulp.dest("dist"));
});

// Задача для копирования изображений
gulp.task("images", function () {
  return gulp.src("src/assets/**/*").pipe(gulp.dest("dist/assets/"));
});

// Задача для обработки JavaScript файлов
gulp.task("scripts", function () {
  return gulp
    .src(["src/**/*.js"])
    .pipe(concat("main.js"))
    .pipe(gulp.dest("dist"));
});

// Задача для отслеживания изменений
gulp.task("watch", function () {
  gulp.watch(["src/*.html", "src/components/**/*.html"], gulp.series("html"));
  gulp.watch(["src/*.css", "src/components/**/*.css"], gulp.series("styles"));
  gulp.watch(["src/assets/**/*"], gulp.series("images"));
  gulp.watch(["src/**/*.js"], gulp.series("scripts"));
});

// Задача по умолчанию
gulp.task(
  "default",
  gulp.series("html", "styles", "images", "scripts", "watch")
);
