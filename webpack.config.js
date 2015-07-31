var path = require("path"),
  node_modules = path.join(__dirname, 'node_modules'),
  webpack = require("webpack"),
  ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function(props) {
  var config = {
    context: path.join(__dirname, props.app),
    entry: {
      app: ['./scripts/main'],
      vendor: ['jquery', 'bootstrap-sass', 'react']
    },
    output: {
      path: path.join(__dirname, props.dist),
      filename: props.dev ? '[name].bundle.js' : '[chunkhash].js',
      chunkFilename: props.dev ? '[id].chunk.js' : '[chunkhash].js'
    },
    module: {
      loaders: [{
        test: /\.(js|jsx)$/,
        loader: 'babel?stage=0'
      }, {
        test: /\.scss$/,
        loader: props.dev ? 'style!css!sass' : ExtractTextPlugin.extract("style", "css!sass")
      }, {
        test: /\.css$/,
        loader: props.dev ? 'style!css' : ExtractTextPlugin.extract('style', 'css?-minimize')
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
    resolveLoader: { root: path.join(__dirname, "node_modules") },
    // postcss: props.dev ? [autoprefixer] : [autoprefixer({browsers: ['> 1%']})],
    devServer: {
      contentBase: props.dist,
      hot: true
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
      }),
      new webpack.DefinePlugin({
        VERSION: JSON.stringify("0.0.1"),
        BROWSER_SUPPORTS_HTML5: true
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        minChunks: Infinity
      }),
    ]
  };
  if (props.dev) {
    config.plugins.push(
      new webpack.HotModuleReplacementPlugin()
    );
  } else {
    config.plugins.push(
      new ExtractTextPlugin('style.css'),
      new webpack.optimize.OccurenceOrderPlugin(true),
      new webpack.optimize.UglifyJsPlugin({
        compress: {warning: false},
        sourceMap: false,
        output: {comments: false}
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV_MODE: JSON.stringify('production')
        }
      })
    );
  }
  return config;
};
