'use strict';

import gulp from 'gulp';
import server from 'gulp-live-server';
import config from '../config/config';
let express;

gulp.task('server', () => {
	express = server.new(config.destinationPath);
});

gulp.task('restart', () => {
	express.start.bind(express)();
});