var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('concat', function () {
  return gulp.src('./css/*.css')
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

gulp.task('default', ['sass', 'concat']);
