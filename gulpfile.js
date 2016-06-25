var gulp = require('gulp'),
    sass = require('gulp-sass'),
    path = require('path'),
    browserSync = require('browser-sync').create();

var source_files = {
    sass: './src/sass/**/*.sass'
};

var output_files = {
    css: './public/css'
};

gulp.task('sass', function () {
    return gulp.src(source_files.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(output_files.css))
        .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch(source_files.sass, ['sass']);
    gulp.watch('./index.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
