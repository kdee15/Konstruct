// KONSTRUCT GULP FILE =================================================
"use strict"
// A. ADD MODULES +++++++++++++++++++++++++++++++++++++++++++

    var gulp = require('gulp');

    // A.0. VARIABLES -----------------------------

        // A.0.1 Styling
        var styleSOURCE = 'assets/css/';

    // A.0. END -----------------------------

    // A.1. GULPWIDE TOOLS -----------------------------

    var gutil = require('gulp-util');
    var clean = require('gulp-clean');
    var runSequence = require('run-sequence');
    var lr = require('tiny-lr');
    var rename = require("gulp-rename");
    var livereload = require('gulp-livereload');
    var server = lr();

    // A.1. END -----------------------------

    // A.2. SETUP TOOLS -----------------------------

    var bower = require('gulp-bower');

    // A.2. END -----------------------------

    // A.3. DEV TOOLS -----------------------------
 
    // Include CSS components
    var sass = require('gulp-sass');
    var prefixer = require('gulp-autoprefixer');
    var minifycss = require('gulp-minify-css');

    // Include JS components
    //var concat = require('gulp-concat');
    //var uglify = require('gulp-uglify');

    // A.3. END -----------------------------

// A. END +++++++++++++++++++++++++++++++++++++++++++

// B. FUNCTIONS +++++++++++++++++++++++++++++++++++++++++++

    // B.1. SYSTEM TASKS -----------------------------------
    
        // B.1.1. Install Bower
        gulp.task('bower', function() {
          return bower()
            .pipe(gulp.dest('assets/external/').on('error', gutil.log));
            
        });

        // B.1.2. Install Konstruct to css
        gulp.task('install-konstruct', function() {
            gulp.src('assets/external/konstruct/**/*')
            .pipe(gulp.dest('assets/css/').on('error', gutil.log));
        });

        // B.1.3. Update Konstruct to css
        gulp.task('update-konstruct', function() {
            console.log('Coming soon!');
        });

        // B.1.4. Delete Konstruct folder from assets/external
        gulp.task('clean', function () {  
          return gulp.src(['.git'], {read: false})
            .pipe(clean().on('error', gutil.log));
        });

        // B.1.3. Delete Konstruct folder from assets/external
        gulp.task('purge', function () {  
          return gulp.src(['.git', 'assets/external/', 'assets/css/*'], {read: false})
            .pipe(clean().on('error', gutil.log));
        });

    // B.1. END -----------------------------------

    // B.2. STYLING TASKS -----------------------------------
    
        // B.2.1. Process SASS with Prefixing
        gulp.task('processSASS', function () {
            gulp.src(styleSOURCE + '/Stylesheet.scss')
                .pipe(sass().on('error', gutil.log))
                .pipe(prefixer('last 10 versions'))
                .pipe(rename("Stylesheet.css"))
                .pipe(gulp.dest(styleSOURCE));
        });

        // B.2.3. Minify CSS
        gulp.task('minifyCSS', function () {
            gulp.src(styleSOURCE + '/Stylesheet.css')
                .pipe(minifycss())
                .pipe(rename('Stylesheet.css'))
                .pipe(gulp.dest(styleSOURCE));
        });
    
    // B.2. END -----------------------------------

    // B.4. WATCH

        gulp.task('watch', function () {
            gulp.watch(styleSOURCE + '/**/*', ['processSASS']);
        });

    // B.4. END

// B. END +++++++++++++++++++++++++++++++++++++++++++

// C. WORK TASKS +++++++++++++++++++++++++++++++++++++++++++

    // C.1. DEFAULT TASK -----------------------------------

    // DESCRIPTION: We don't want people to use this task, rather pushing them into a workflow channel.

    gulp.task('default', function () {
        console.log(' ');
        console.log('WOAH!');
        console.log(' ');
        console.log('Hey there! Konstruct works better if you run gulp through the channels we provided. They give you the 4 development workflows we use most often, and optimise your work at specific levels.');
        console.log(' ');
        console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
        console.log(' ');
        console.log('COMING SOON: We will replace this with a nice menu soon. ');
        console.log(' ');
        console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
        console.log(' ');
        
    });

    // C.1. END -----------------------------------

    // C.2. SETUP TASK -----------------------------------

    gulp.task('init', function(callback) {
      runSequence('bower',
                  'install-konstruct',
                  'clean',
                  callback);
    });

    // C.2. END -----------------------------------

    // C.3. UPDATE TASK -----------------------------------

    gulp.task('update', function(callback) {
      runSequence('bower',
                  'update-konstruct',
                  callback);
    });

    // C.3. END -----------------------------------

    // C.3. DEVELOPMENT TASK -----------------------------------

    // DESCRIPTION: This is the watch task that will be used during development.

    gulp.task('dev', ['processSASS', 'watch']);

    // C.3. END -----------------------------------

    // C.4. DEVELOPMENT SERVER -----------------------------------

    // DESCRIPTION: This task runs a server with livereload.

    gulp.task('server', function () {
        console.log('Watching your back son!');
    });

    // C.4. END -----------------------------------

    // C.5. PRODUCTION TASK -----------------------------------
    
    // DESCRIPTION: Run once off tasks to optimise the site for a production environment.

    gulp.task('build', function (callback) {
        runSequence('minifyCSS',
                  callback);
    });

    // C.5. END -----------------------------------

    // C.5. DEPLOYMENT TASK -----------------------------------

    // DESCRIPTION: This needs a good think, there are many ways to deploy, do we want to force people into a single deployment?

    gulp.task('deploy', function () {
        console.log('Watching your back son!');
    });

    // C.5. END -----------------------------------

// C. END +++++++++++++++++++++++++++++++++++++++++++
