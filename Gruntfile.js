module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({

		// 1.1. Configure grunt-contrib-concat
        concat: {   
            dist: {
                src: [
                    'assets/js/scripts/*.js'  // This specific file
                ],
                dest: 'assets/js/production.js',
            }
        },
        // 1.1. End
        
        // 1.2. Uglify Javascript
        
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
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'imagemin']);

};