'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import config from '../config/config';

gulp.task('babel', () => {
	gulp.src(config.jsFiles.src)
		.pipe(babel({
			presets: ['es2015-node5']
		}))
		.pipe(gulp.dest(config.destinationPath))
});