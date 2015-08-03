var gulp = require('gulp'),
  path = require('path'),
  $ = require('gulp-load-plugins')(),
  del = require('del'),
  webpack = require('webpack'),
  webpackConfig = require('./webpack.config'),
  webpackDevServer = require('webpack-dev-server'),
  gutil = require('gulp-util'),
  util = require('util');


var props = {
  app: 'app',
  dist: './dist',
  host: 'localhost',
  port: $.util.env.port || 3000
};

// copy html from app to dist
gulp.task('html', function () {
  return gulp.src(props.app + '/index.html')
    .pipe(gulp.dest(props.dist))
    .pipe($.size({title: 'html'}));
});

gulp.task('resources', function (cb) {
  return gulp.src(props.app + '/**/*.{png,jpg,jpeg,gif,ico}')
    .pipe($.size({title: 'resources'}))
    .pipe(gulp.dest(props.dist));
});

// remove bundels
gulp.task('clean', function (cb) {
  del([props.dist], cb);
});

gulp.task('default', ['dev']);

gulp.task('build', ['clean'], function () {
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

gulp.task('dist', ['clean'], function (callback) {
  gulp.start('resources');
  var prod = Object.create(webpackConfig(props));
  webpack(prod, function (err, stats) {
    gutil.log('[webpack:build]', stats.toString());
    if (err) throw new gutil.PluginError('webpack:build', err);
    var json = stats.toJson();
    if (json.errors.length > 0)
      throw new gutil.PluginError('webpack:build', json.errors);
    if (json.warnings.length > 0)
      throw new gutil.PluginError('webpack:build', json.warnings);
    gulp.src(props.app + '/template/index.html')
      .pipe($.replace(/app\.css/, chunkName(json, 'app', '.css')))
      .pipe($.replace(/vendor\.js/, chunkName(json, 'vendor', '.js')))
      .pipe($.replace(/app\.js/, chunkName(json, 'app', '.js')))
      .pipe(gulp.dest(props.dist));
    require('fs').writeFileSync(
      path.join(__dirname, "./", "stats.json"),
      JSON.stringify(stats.toJson()));
    callback();
  });
});

var chunkName = function (json, name, ext) {
  var chunk = json.assetsByChunkName[name];
  if (util.isArray(chunk)) {
    chunk = chunk.filter(function (filename) {
      return path.extname(filename).toLowerCase() === ext
    }).shift();
  }
  return chunk;
};
