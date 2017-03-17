'use strict';

import gulp from 'gulp';
import nodemon from 'gulp-nodemon';
import livereload from 'gulp-livereload';
import notify from 'gulp-notify';
import config from '../config/config';

gulp.task('watch', ['build'], () => {
    return nodemon({
        script: config.destinationPath,
        watch: config.srcFiles,
        tasks: ['build']
    }).on('restart', function(){
        gulp.src(config.destinationPath)
            .pipe(livereload())
            .pipe(notify('Reloading, please wait...'));
    });
});