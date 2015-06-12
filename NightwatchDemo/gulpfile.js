var gulp = require('gulp'),
    nightwatch = require('gulp-nightwatch'),
    shell = require('gulp-shell');

gulp.task('test', function () {
    return gulp.src('')
        .pipe(nightwatch({
            configFile: 'config/nightwatch.json'
        }))
        .on('error', errorHandler);
});

gulp.task('report', ['test'], function () {
    return gulp.src('')
        .pipe(shell(['grunt build-report']))
        .on('error', errorHandler);
});

function errorHandler(error) {
    console.log(error.toString());
    this.emit('end');
}