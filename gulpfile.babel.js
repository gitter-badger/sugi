
import gulp from 'gulp';
import sass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css'

gulp.task('default', () => {
  gulp.src('themes/**/scss/*.scss')
  .pipe(sass())
  .pipe(cleanCss())
  .pipe(rename({
    dirname: 'css',
    suffix: '.min',
  }))
  .pipe(gulp.dest('dist'));
});
