var gulp   = require('gulp'),
    jshint = require('gulp-jshint'),
     sourcemaps = require('gulp-sourcemaps'),
     concat = require('gulp-concat'),
     gutil = require('gulp-util'),
     uglify = require('gulp-uglify'),
     Server = require('karma').Server,
     connect = require('gulp-connect');


// define the default task and add the watch task to it
gulp.task('default', ['serve', 'watch']);
gulp.task('serve', function() {
  connect.server({
      livereload: true,
       port: 3000,
       root : 'app/'
  });
});

gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

// configure the jshint task
gulp.task('jshint', function() {
  return gulp.src(['!app/lib/**/*.js', 'app/**/*.js', 'specs/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('copy-assets', function(){
    return gulp.src(['app/**/*.json'])
            .pipe(gulp.dest('./dest'));
});

gulp.task('copy-html', function(){
    return gulp.src(['!app/index.html','app/**/*.html'])
            .pipe(gulp.dest('./dest'));
});

gulp.task('build',[ 'copy-html','copy-assets' ], function() {
  return gulp.src('app/**/*.js')
    .pipe(sourcemaps.init())
      .pipe(concat('bundle.js'))
      //only uglify if gulp is ran with '--type production'
      .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) 
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dest'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  gulp.watch(['app/**/*.js', 'specs/**/*.js'], ['jshint','test']);
});