const gulp = require('gulp');
const less = require('gulp-less');
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-minify-css');

gulp.task('styles', () => {
  return gulp.src('*.less')
    .pipe(less({}))
    .pipe(prefix())
    .pipe(minify())
    .pipe(gulp.dest('docs/css/.'));
});

function watch() {
  gulp.watch('*.less', gulp.series('styles'));
}

gulp.task('default', gulp.series('styles'));
gulp.task('watch', gulp.series('default', watch));