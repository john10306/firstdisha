// Load plugins
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    compass = require('gulp-compass'),
    connect = require('gulp-connect');

// Styles
gulp.task('styles', function() {
     gulp.src('*.css')
        .pipe(concat('style.css')
            .on('error', gutil.log))
        .pipe(gulp.dest('./'))
        .pipe(connect.reload())

});

// Scripts
gulp.task('scripts', function() {
   gulp.src('js/*.js')
        .pipe(concat('script.js')
            .on('error', gutil.log))
        .pipe(gulp.dest('./'))
        .pipe(connect.reload())
});

//compass
gulp.task('comp', function() {
  gulp.src('stylez.scss')
        .pipe(compass({
            sass: './',
            style:'expanded'}))
        .pipe(connect.reload())
        .pipe(gulp.dest('./'))
});


//html
gulp.task('html', function() {
    gulp.src('*.html')
        .pipe(connect.reload())
})

// Default task
gulp.task('default', ['connects', 'watch']);

gulp.task('connects', function() {
    connect.server({
        root: './',
        livereload: true

    });
});


// Watch
gulp.task('watch', function() {
    gulp.watch('*.scss', ['comp']);
    // Watch .js files
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('*.html', ['html']);

});
