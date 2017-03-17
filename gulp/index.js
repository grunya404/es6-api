'use strict';

import gulp from 'gulp';
import run from 'run-sequence';
import './tasks/watch';
import './tasks/babel';
import './tasks/clean';
import './tasks/flow';

gulp.task('dev', cb => {
    run('watch', cb);
});

gulp.task('build', cb => {
    run('clean', ['flow', 'babel'], cb);
});