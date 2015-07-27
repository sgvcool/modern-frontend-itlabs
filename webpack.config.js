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
      filename: 'main.js'
    },
    debug : isDev,
    module: {
      loaders: [
        { test: /\.scss$/, loader: "style!css!sass" },

        { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
        { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&minetype=application/font-woff" },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=image/svg+xml" }
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        minChunks: Infinity,
      })
    ]
  };

  if(isDev){
    config.devtool = 'eval';
  }

  return config;
};
