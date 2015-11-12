'use strict';

var gulp = require('gulp');

gulp.task('watch', function() {
	gulp.watch('app/**/*.js', ['browserify'])
	gulp.watch('public/index.html', ['browserify'])
	gulp.watch('assets/scss/**/*.scss', ['styles']);
});
