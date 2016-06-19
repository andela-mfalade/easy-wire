var gulp = require('gulp'),
    sass = require('gulp-sass'),
    path = require('path');

var source_files = {
    sass: './src/sass/**/*.sass'
};

var output_files = {
    css: './public/css'
};

gulp.task('sass', function () {
  return gulp.src(source_files.sass)
    .pipe(sass({
        paths: [ path.join(__dirname, 'sass', 'includes') ]
    }))
    .pipe(gulp.dest(output_files.css));
});

gulp.watch(source_files.sass, ['sass'])

gulp.task('default', ['sass']);
