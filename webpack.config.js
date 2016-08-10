var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: './',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader:  ExtractTextPlugin.extract("style-loader","css-loader")
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin("base-style.css")
  ]
};
