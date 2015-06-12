var gulp = require('gulp'),
    nightwatch = require('gulp-nightwatch');

require('gulp-grunt')(gulp);

gulp.task('runTests', function () {
    gulp.src('')
        .pipe(nightwatch({
            configFile: 'config/nightwatch.json'
        })).on('error', errorHandler);
});

function errorHandler(error) {
    console.log(error.toString());
    this.emit('end');
}