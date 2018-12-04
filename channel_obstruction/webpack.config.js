/**
 * Created by darka on 03/05/2017.
 */

var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,
  entry: {
          lobby: './templates/components/lobby/index.jsx',
          //game: './templates/components/game/index'
  },
  output: {
      path: path.resolve('./static/bundles/'),
      filename: "[name]-[hash].js"
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(), // don't reload if there is an error
    new BundleTracker({path: __dirname, filename: './webpack-stats.json'})
  ],

    module: {
      loaders: [
        {
          test: /\.jsx$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
          query: {
            presets: ['es2015', 'react']
          }
        },

      ]
},

  resolveLoader: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx']
  },
}
