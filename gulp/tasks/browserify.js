'use strict';

var gulp = require('gulp');

// add browserify
var browserify = require('browserify');
var source     = require('vinyl-source-stream');

gulp.task('browserify', function() {
	return browserify('./app/app.js')
		.bundle()
		.pipe(source('main.js'))
		.pipe(gulp.dest('./public/js/'));
})
