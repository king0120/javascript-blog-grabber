var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    reactify = require('reactify');

gulp.task('javascript', function(){
  //set up browserify
  var b = browserify({
    entries: './app/entry.js',
    debug: true,
    transform: [reactify]
  });

  return b.bundle()
         .pipe(source('app.js'))
         .pipe(buffer())
         .pipe(sourcemaps.init({loadmaps: true}))
           //adds transforms to the pipeline
           .pipe(uglify())
           .on('error', gutil.log)
         .pipe(sourcemaps.write('./'))
         .pipe(gulp.dest('./dist/js/'));
});

gulp.task('default', function(){

});
