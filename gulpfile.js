var gulp = require('gulp');
var path = require('path');
var $ = require('gulp-load-plugins')();
var del = require('del');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var webpackDevServer = require('webpack-dev-server');
var gutil = require('gulp-util');

var props = {
  app: 'app',
  dist: './dist',
  host: 'localhost',
  port: $.util.env.port || 3000
};

// copy html from app to dist
gulp.task('html', function() {
  return gulp.src(props.app + '/index.html')
    .pipe(gulp.dest(props.dist))
    .pipe($.size({ title : 'html' }));
});

gulp.task('resources', function(cb) {
  return gulp.src(props.app + '/**/*.{png,jpg,jpeg,gif,ico}')
    .pipe($.size({ title : 'resources' }))
    .pipe(gulp.dest(props.dist));
});

// remove bundels
gulp.task('clean', function(cb) {
  del([props.dist], cb);
});

// by default build project and then watch files in order to trigger livereload
gulp.task('default', ['dev']);

// waits until clean is finished then builds the project
gulp.task('build', ['clean'], function(){
  gulp.start(['webpack', 'resources', 'html']);
});

gulp.task('dev', ['clean'], function () {
  gulp.start('resources');
  gulp.src(props.app + '/template/index-dev.html')
    .pipe($.rename('index.html'))
    .pipe(gulp.dest(props.dist));
  props.dev = true;
  var url = 'http://' + props.host + ':' + props.port;
  var dev = Object.create(webpackConfig(props));
  dev.entry.app.push('webpack/hot/dev-server');
  new webpackDevServer(webpack(dev), {
    contentBase: dev.devServer.contentBase,
    hot: dev.devServer.hot
  }).listen(props.port, props.host, function (err) {
    if (err) throw new gutil.PluginError('webpack-dev-server', err);
    gutil.log('[webpack-dev-server]', url + '/webpack-dev-server/index.html');
  });
});
