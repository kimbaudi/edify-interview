/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { merge } = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const sass = require('sass');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['react-refresh/babel'],
            },
          },
        ],
      },
      {
        test: /\.(css|sass|scss)$/i,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { sourceMap: true } },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env', {}]],
              },
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: sass,
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    devMiddleware: {
      publicPath: '/',
    },
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true,
    open: {
      target: ['http://localhost:4001'],
    },
    port: 4001,
  },
  plugins: [new ReactRefreshWebpackPlugin()],
});
