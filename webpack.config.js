const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

let styleLoader = 'css-loader!sass-loader';

module.exports = {
  entry: './assets/js/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/',
    filename: 'main.js'
  },

  target: 'web', // https://webpack.github.io/docs/configuration.html#target

  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },

  plugins: [
    new ExtractTextPlugin('main.css')
  ],

  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          scss: ExtractTextPlugin.extract(styleLoader)
        }
      }
    }]
  }
};
