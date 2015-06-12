module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        nightwatch_report: {
            files: ['tests/output/*.xml'],
            options: {
                outputDir: 'tests/reports'
            }
        },
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-nightwatch-report');

    // Default task(s).
    grunt.registerTask('default', ['nightwatch_report']);

};