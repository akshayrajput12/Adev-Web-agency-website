/*
* Simple GULP tooling
* Copyright AppSeed (https://appseed.us)
* License MIT
*/
var gulp = require('gulp');
var path = require('path');
var sass = require('gulp-sass')(require('sass'));
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var open = require('open'); // Using the 'open' npm package instead of 'gulp-open'

var Paths = {
  HERE: './',
  DIST: 'dist/',
  CSS: './assets/css/',
  SCSS_TOOLKIT_SOURCES: './assets/scss/web-agency.scss',
  SCSS: './assets/scss/**/**'
};

// Task to compile SCSS into CSS
gulp.task('scss', function() {
  return gulp.src(Paths.SCSS_TOOLKIT_SOURCES)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write(Paths.HERE))
    .pipe(gulp.dest(Paths.CSS));
});

// Task to watch for changes in SCSS files and recompile
gulp.task('watch', function() {
  gulp.watch(Paths.SCSS, gulp.series('scss'));
});

// Task to open the index.html in the browser
gulp.task('open', function() {
  return open('index.html');  // Updated to use the 'open' package instead of 'gulp-open'
});
