const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  devServer: {
    contentBase: './dist',
    port: 3000,
    inline: true
  },
  module: {
    rules:[{
      test: /\jsx$/,
      exclude: path.resolve(__dirname, 'node_modules'),
      loader: 'babel-loader',
      query: {
        presets: ['@babel/preset-react', '@babel/preset-env']
      }
    },
    {
      test: /\.css$/,
      exclude: path.resolve(__dirname, 'node_modules'),
      loader: ["style-loader", "css-loader?modules"],
    }]
  },
};

module.exports = config;


