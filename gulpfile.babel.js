
import gulp from 'gulp';
import sass from 'gulp-sass';
import rename from 'gulp-rename';

gulp.task('default', () => {
  gulp.src('themes/**/scss/default.scss')
  .pipe(sass())
  .pipe(rename({
    dirname: 'css',
  }))
  .pipe(gulp.dest('dist'));
});
