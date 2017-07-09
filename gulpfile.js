'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

gulp.task('sass', function () {
    return gulp.src('**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(livereload({
            post: 9001
        }));
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('**/*.scss', ['sass']);
});