module.exports = function(grunt) {

    // 1. CONFIGURATION +++++++++++++++++++++++++++++++++++++++++++++++
    
    grunt.initConfig({
    
    	// 1.1. Process SASS 
    	sass: {
    	    dist: {
    	        options: {
    	            style: 'expanded'
    	        },
    	        files: {
    	            'assets/css/Stylesheet.css': 'assets/css/Stylesheet.scss'
    	        }
    	    } 
    	},
    	// 1.1. End
    	
    	// 1.2. Prefix Post-processing 
    	autoprefixer: {
	      options: {
	        browsers: ['last 2 version']
	      },
	      single_file: {
            src: 'assets/css/Stylesheet.css',
            dest: 'assets/css/Stylesheet.css'
          }
	    },
    	// 1.2. End
    	
    	// 1.3. Minify my css
    	cssmin: {
			add_banner: {
			    options: {
			      banner: '/* My minified css file */'
			    },
			    files: {
			      'assets/css/Stylesheet.css': ['assets/css/Stylesheet.css']
			    }
			  }
	    },
    	// 1.3

		// 1.4. Concatenate Javascript assets
        concat: {   
            dist: {
                src: [
                    'assets/js/libraries/*.js',
                    'assets/js/scripts/*.js'
                ],
                dest: 'assets/js/production.js',
            }
        },
        // 1.4. End
        
        // 1.5. Uglify Javascript
        uglify: {
            build: {
                src: 'assets/js/production.js',
                dest: 'assets/js/production.min.js'
            }
        },
        // 1.5. End
        
        // 1.6. Configure grunt-contrib-concat
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
        // 1.6. End
        
        // 1.7. SASS Processor
        
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
                files: ['assets/css/**/*.scss'],
                tasks: ['sass', 'autoprefixer', 'cssmin'],
                options: {
                    spawn: false,
                }
            },
            
            // 1.5.2. End
            
            // 1.5.3. Watch Images
            
            images: {
	            files: ['images/**/*.{png,jpg,gif}', 'images/*.{png,jpg,gif}'],
	            tasks: ['imagemin'],
	            options: {
	              spawn: false,
	            }
	          }
	          
            // 1.5.3. End
        }
        
        // 1.5. End

    });
    
    // 1. END +++++++++++++++++++++++++++++++++++++++++++++++
    
    // 2. LOAD PLUGINS +++++++++++++++++++++++++++++++++++++++++++++++
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');
    
    // 2. END +++++++++++++++++++++++++++++++++++++++++++++++

    // 3. RUNNING +++++++++++++++++++++++++++++++++++++++++++++++
    
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'sass', 'autoprefixer', 'cssmin']);
    
    // 3. END +++++++++++++++++++++++++++++++++++++++++++++++

};