const path = require('path');
const _ = require('lodash');

const webpack = require('webpack'); //to access built-in plugins
const CleanPlugin = require('clean-webpack-plugin');
const LodashPlugin = require('lodash-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const VerPlugin = require('webpack-ver-plugin');

const filename = 'detector';

const config = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: filename,
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?cacheDirectory'
      }
    ]
  },
  externals: {
    'flavor-js': {
      root: "ƒ",
      commonjs: "flavor-js",
      commonjs2: "flavor-js",
      amd: "flavor-js"
    },
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_' // indicates global variable
    },
  },
  plugins: [
    new LodashPlugin()
  ]
};

const umd = _.merge({}, config, {
  devtool: 'sourcemap',
  output: {
    filename: filename + '.js',
    libraryTarget: 'umd',
  },
  plugins: _.concat(config.plugins, [
    new VerPlugin({
      packageFile: path.join(__dirname, 'package.json'),
      outputFile: path.join('./src/', 'release.json')
    }),
    new CleanPlugin(['dist']),
  ])
});

const umdProd = _.merge({}, config, {
  output: {
    filename: filename + '.min.js',
    libraryTarget: 'umd',
  },
  plugins: _.concat(config.plugins, [
    new UglifyJsPlugin(),
  ])
});

module.exports = [umd, umdProd];
