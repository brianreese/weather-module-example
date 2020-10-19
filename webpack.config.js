'use strict';

const path = require("path");
const glob = require("glob");
const files = glob.sync("./js/src/**/*.js");

let config = {
  entry: {}, // Entry points added using files glob.
  mode: 'development',
  output: {
    filename:'[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015'],
        },
      }
    ]
  }
}

files.forEach((file) => {
  const entry = path.basename(file).replace(/\.js$/, '');
  config.entry[entry] = file;
});

module.exports = config;
