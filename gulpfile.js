import gulp from "gulp";
import del from "del";
import squoosh from "gulp-libsquoosh";

const optimizeImages = () => {
  return gulp.src("source/**/*.{png,jpg}").pipe(squoosh()).pipe(gulp.dest("build/img"));
};

const webp = () => {
  return gulp
    .src("source/**/*.{png,jpg}")
    .pipe(
      squoosh({
        webp: {},
      })
    )
    .pipe(gulp.dest("build/img"));
};

const clean = () => {
  return del("build");
};

export default gulp.series(clean, optimizeImages, webp);
