'use strict';

import gulp from 'gulp';
import clean from 'gulp-clean';
import config from '../config/config';

gulp.task('clean', function () {
	return gulp.src(config.cleanPath, {read: false})
		.pipe(clean());
});