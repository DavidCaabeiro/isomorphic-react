var gulp       = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('default', function() {
    // place code for your default task here
    gulp.src(['main.js'])
    .pipe(browserify({
            debug: true,
            transform: 'reactify'
        })
    )
    .pipe(gulp.dest('./public/javascripts/'));
});
