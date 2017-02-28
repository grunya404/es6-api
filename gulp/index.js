'use strict';

import gulp from 'gulp';
import run from 'run-sequence';
import './tasks/server';
import './tasks/watch';
import './tasks/babel';
import './tasks/clean';
import './tasks/flow';

gulp.task('api', cb => {
	run('server', 'build', 'watch', cb);
});

gulp.task('build', cb => {
	run(['clean', 'flow', 'babel'], 'restart', cb);
});