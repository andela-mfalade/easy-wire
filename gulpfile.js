var gulp = require('gulp'),
    sass = require('gulp-sass'),
    path = require('path'),
    browserSync = require('browser-sync').create();

var sources = {
    sass: './src/sass/**/*.sass',
    html: '.public/templates/*.html'
};

var output_files = {
    css: './public/css'
};

gulp.task('sass', function () {
    return gulp.src(sources.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(output_files.css))
        .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch(sources.sass, ['sass']);
    gulp.watch('./index.html').on('change', browserSync.reload);
    gulp.watch(sources.html).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
