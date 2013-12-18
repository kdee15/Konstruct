module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({

		// 1.1. Concatenate Javascript assets
        concat: {   
            dist: {
                src: [
                    'assets/js/libraries/*.js',
                    'assets/js/scripts/*.js'
                ],
                dest: 'assets/js/production.js',
            }
        },
        // 1.1. End
        
        // 1.2. Uglify Javascript
        uglify: {
            build: {
                src: 'assets/js/production.js',
                dest: 'assets/js/production.min.js'
            }
        },
        // 1.2. End
        
        // 1.3. Configure grunt-contrib-concat
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'assets/images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'assets/images/'
                }]
            }
        }
        // 1.3. End

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'imagemin']);

};