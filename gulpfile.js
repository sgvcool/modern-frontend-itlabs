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

// https://github.com/ai/autoprefixer
var autoprefixerBrowsers = [
  'ie >= 9',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 6',
  'opera >= 23',
  'ios >= 6',
  'android >= 4.4',
  'bb >= 10'
];

// copy html from app to dist
gulp.task('html', function() {
  return gulp.src(props.app + 'index.html')
    .pipe($.rigger())
    .pipe(gulp.dest(props.dist))
    .pipe($.size({ title : 'html' }))
    .pipe($.connect.reload());
});

gulp.task('styles', function(cb) {

  return gulp.src(props.app + 'styles/main.scss')
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: autoprefixerBrowsers}))
    .pipe($.size({ title : 'css' }))
    .pipe($.connect.reload());
});

// add livereload on the given port
gulp.task('serve', function() {
  $.connect.server({
    root: props.dist,
    port: props.port,
    livereload: {
      port: 35729
    }
  });
});

gulp.task('resources', function(cb) {
  return gulp.src(props.app + '/**/*.{png,jpg,jpeg,gif,ico}')
    .pipe($.size({ title : 'resources' }))
    .pipe(gulp.dest(props.dist));
});

// watch styl, html and js file changes
gulp.task('watch', function() {
  gulp.watch(props.app + 'styles/*.css', ['styles']);
  gulp.watch(props.app + 'index.html', ['html']);
  gulp.watch(props.app + 'scripts/**/*.js', ['scripts']);
});

// remove bundels
gulp.task('clean', function(cb) {
  del([props.dist], cb);
});

gulp.task('webpack', function(){
  webpack(webpackConfig(props), function(err, stats) {
    if(err) throw console.log(err);
    console.log("webpack" + stats.toString());
  });
});

// by default build project and then watch files in order to trigger livereload
gulp.task('default', ['build', 'serve', 'watch']);

// waits until clean is finished then builds the project
gulp.task('build', ['clean'], function(){
  gulp.start(['webpack', 'resources', 'html']);
});


gulp.task('dev', function () {
  gulp.start('resources');
  gulp.src(props.app + '/template/index-dev.html')
    .pipe($.rigger()).pipe($.rename('index.html'))
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
