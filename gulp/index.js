'use strict';

import gulp from 'gulp';
import run from 'run-sequence';
import shell from 'gulp-shell';
import './tasks/server';
import './tasks/watch';
import './tasks/babel';
import './tasks/clean';
import './tasks/flow';

gulp.task('dev', cb => {
    run('server', 'build', 'watch', cb);
});

gulp.task('client', shell.task([
    'NODE_ENV=production webpack --config ./webpack.prod.config.js'
]));

gulp.task('build', cb => {
    run('client', ['clean', 'flow', 'babel'], 'restart', cb);
});