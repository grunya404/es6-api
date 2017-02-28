'use strict';

import gulp from 'gulp';
import watch from 'gulp-watch';
import config from '../config/config';

gulp.task('watch', () => {
	return watch(config.jsFiles.src, () => {
		gulp.start('build');
	});
});