'use strict';
import gulp from 'gulp';
import shell from 'gulp-shell';

gulp.task('flow', shell.task([
		'flow'
	], {ignoreErrors: true}
));