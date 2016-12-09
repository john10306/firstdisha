// Load plugins
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    compass = require('gulp-compass'),
    connect = require('gulp-connect');

// Styles
gulp.task('styles', function() {
    return gulp.src('*.css')
        .pipe(concat('style.css')
            .on('error', gutil.log))
        .pipe(gulp.dest('./'))
        .pipe(connect.reload())

});

// Scripts
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('script.js')
            .on('error', gutil.log))
        .pipe(gulp.dest('./'))
        .pipe(connect.reload())
});

//html
gulp.task('html', function() {
    gulp.src('*.html')
        .pipe(connect.reload())
})

//compass


// // Images
// gulp.task('images', function() {
//     return gulp.src('img/*')
//         .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
//         .pipe(livereload(server))
// });


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
    gulp.watch('*.css', ['styles']);

    // Watch .js files
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('*.html', ['html']);

});
