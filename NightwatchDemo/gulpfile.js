var gulp = require('gulp'),
    nightwatch = require('gulp-nightwatch');

require('gulp-grunt')(gulp, {
    prefix: 'grunt-'
});

gulp.task('runTests', function () {
    gulp.src('')
        .pipe(nightwatch({
            configFile: 'config/nightwatch.json'
        })).on('error', errorHandler);

    //gulp.start('grunt-report');
});

function errorHandler(error) {
    console.log(error.toString());
    this.emit('end');
}