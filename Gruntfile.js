'use strict';

/////////////////////
// Customize here ('.' is where Gruntfile is located)
/////////////////////
// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

var folders2watch = [
        // '<%= config.app %>/{,*/}*.html',
        // '.tmp/styles/{,*/}*.css',
        // '<%= config.app %>/images/{,*/}*'
        './index.html'
    ],
    // Where index.html should be so that when you get to
    // localhost:9000, it will load a page.
    baseRoute = ['.'];


/////////////////////
// You shouldn't have to touch from here down
/////////////////////

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        config: {
            // Configurable paths
            app: 'app',
            dist: 'dist'
        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: folders2watch
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: indexLocation
                }
            }
        }
    });


    grunt.registerTask('default', function (target) {
        grunt.task.run([
            'connect:livereload',
            'watch'
        ]);
    });
};
