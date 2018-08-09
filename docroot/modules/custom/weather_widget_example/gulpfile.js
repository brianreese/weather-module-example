'use strict'

const gulp = require('gulp');
const webpack = require('webpack-stream');

const options = {
  src: {
    scripts: 'js/modules',
    modules: 'js/src'
  },
  dest: {
    dist: 'js/dist'
  }
};

gulp.task('webpack', () => {
  const webpackConfig = require('./webpack.config');
  return gulp.src(options.src.modules)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(options.dest.dist));
});

gulp.task('watch:webpack', () => {
  return gulp.watch([
    `${options.src.scripts}/**/*.js`,
    `${options.src.modules}/**/*.js`,
  ], ['webpack']);
});

gulp.task('build', ['webpack']);
gulp.task('watch', ['watch:webpack']);
gulp.task('default', ['build']);
