var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    sourcemapes = require('gulp-sourcemaps'),
    jade = require('gulp-jade'),
    gutil = require('gulp-util'),
    buffer = require('vinyl-buffer'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    reactify = require('reactify'),
    sass = require('gulp-sass'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify');


gulp.task('jade', function(){
  gulp.src('app/**/*.jade')
      .pipe(jade())
      .pipe(gulp.dest('./dist/'))
});

gulp.task('styles', function(){
  gulp.src('app/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('./dist/css/'));
});

gulp.task('bower', function(){
  gulp.src('bower_components/**/**/**.min.**')
      .pipe(gulp.dest('./dist/external/'))
})

gulp.task('javascript', function(){
  gulp.src('app/**/*.js')
        .pipe(gp_concat('concat.js'))
        .pipe(gulp.dest('dist'))
        .pipe(gp_rename('uglify.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest('dist/js'));

});

gulp.task('watch', function(){
  gulp.watch('app/styles/**/*.scss', ['styles']);
  gulp.watch('app/**/*.js', ['javascript']);
  gulp.watch('app/**/*.jade', ['jade']);
})

gulp.task('default', ['styles', 'javascript', 'jade', 'watch'], function(){
  return gutil.log('gulp is running');
});
