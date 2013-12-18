module.exports = function(grunt) {

    // 1. CONFIGURATION +++++++++++++++++++++++++++++++++++++++++++++++
    
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
        },
        // 1.3. End
        
        // 1.4. SASS Processor
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'assets/css/Stylesheet.css': 'assets/css/Stylesheet.scss'
                }
            } 
        },
        // 1.4. End
        
        // 1.5. Watcher
        
        watch: {
        
        	// 1.5.1. Watch scripts
        
            scripts: {
                files: [
                	'assets/js/*.js',
                	'assets/js/libraries/*.js',
                	'assets/js/scripts/*.js'
                ],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            },
            
            // 1.5.1. End
            
            // 1.5.2. Watch css
            
            css: {
                files: ['assets/css/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            }
            
            // 1.5.2. End
        }
        
        // 1.5. End

    });
    
    // 1. END +++++++++++++++++++++++++++++++++++++++++++++++
    
    // 2. LOGGING EVENTS +++++++++++++++++++++++++++++++++++++++++++++++
    
    grunt.event.on('watch', function(action, filepath, target) {
      grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });
    
    // 2. END +++++++++++++++++++++++++++++++++++++++++++++++
    
    // 3. LOAD PLUGINS +++++++++++++++++++++++++++++++++++++++++++++++
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    // 3. END +++++++++++++++++++++++++++++++++++++++++++++++

    // 4. RUNNING +++++++++++++++++++++++++++++++++++++++++++++++
    
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'sass']);
    
    // 4. END +++++++++++++++++++++++++++++++++++++++++++++++

};