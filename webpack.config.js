var webpack = require("webpack");
var path = require("path");

module.exports = function(type) {

  var isDev = type === 'development';

  var config = {
    context: path.join(__dirname, "app"),
    entry: {
      vendor: ["jquery", "bootstrap-sass"],
      app: './scripts/main'
    },
    output: {
      path: path.join(__dirname, 'dist', 'js'),
      filename: '[name].bundle.js',
      chunkFilename: '[id].chunk.js'
    },
    debug: isDev,
    module: {
      loaders: [{
        test: /\.scss$/,
        loader: "style!css!sass"
      }, {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&minetype=application/font-woff"
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&minetype=application/font-woff"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&minetype=application/octet-stream"
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&minetype=image/svg+xml"
      }]
    },
    plugins: [
      new webpack.NoErrorsPlugin(),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.DefinePlugin({
        VERSION: JSON.stringify("0.0.1"),
        BROWSER_SUPPORTS_HTML5: true
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        minChunks: Infinity,
      })
    ]
  };

  if (isDev) {
    config.devtool = 'eval';
  }

  return config;
};
