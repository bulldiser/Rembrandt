var gulp = require('gulp'),
    nightwatch = require('gulp-nightwatch');

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