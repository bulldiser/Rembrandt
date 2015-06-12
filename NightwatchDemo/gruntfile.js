module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        nightwatch_report: {
            files: ['tests/output/**/*.xml'],
            options: {
                outputDir: 'tests/reports'
            }
        },
    });

    grunt.loadNpmTasks('grunt-nightwatch-report');

    // Default task(s).
    grunt.registerTask('default', ['build-report']);
    grunt.registerTask('build-report', ['nightwatch_report']);
};