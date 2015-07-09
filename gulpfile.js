var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var del = require('del');
var watch = require('gulp-watch');

gulp.task('clean', function () {
  return del(['css', 'dist'], function (err, paths) {
    console.log('Deleted files/folders:\n', paths.join('\n'));
  });
});

gulp.task('sass', function () {
    return gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

gulp.task('concat', ['sass'], function () {
  return gulp.src('./css/*.css')
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', ['concat']);
});

gulp.task('default', ['clean', 'concat']);
