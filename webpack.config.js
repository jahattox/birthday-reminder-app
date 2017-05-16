const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

const ExtractTextPluginConfig = new ExtractTextPlugin({
  filename: 'style.css',
  allChunks: true
});

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'bootstrap-loader',
    './app/app.js'
  ],
  output: {
    path: __dirname + '/public',
    filename: "bundle.js"
  },
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  resolve: {
    modules: [__dirname, 'node_modules', './app/components'],
    alias: {
      applicationStyles: __dirname + '/app/styles/app.scss'
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        exclude: /(node_modules|bower_components)/
      },
      { 
        test: /bootstrap-sass\/assets\/javascripts\//, 
        loader: 'imports?jQuery=jquery' 
      },
      {
        test: /\.scss$/, 
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader'] })
      },
      { 
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
        loader: 'url-loader?limit=100000' 
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    HtmlWebpackPluginConfig,
    ExtractTextPluginConfig
  ],
  devServer: {
    port: 3001
  }
};
