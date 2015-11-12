'use strict';
var gulp  = require('gulp');

gulp.task('default', ['connect', 'browserify', 'styles', 'watch']);
