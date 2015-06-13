require('node-env-file')('.env', { require: true })

var isDevelopment = process.env.NODE_ENV === 'development'
var path          = require('path')
var project       = require('../package')
var webpack       = require('webpack')

var config = {
  context: path.resolve(__dirname, '..', 'platforms', 'browser'),

  debug: isDevelopment,

  devtool: isDevelopment ? 'cheap-module-eval-source-map' : 'source-map',

  entry: [ './index.jsx' ],

  output: {
    path: path.resolve(__dirname, '..', 'public'),
    filename: project.name + '.js'
  },

  plugins: [
    // Note: we use babel for environment variables, however this is necessary
    // for node_modules
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    })
  ],

  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.sass'],
    modulesDirectories: [ 'web_modules', 'node_modules' ]
  },

  module: {
    noParse: [ 'immutable' ],
    loaders: [
      {
        test    : /\.jsx*$/,
        exclude : /node_modules/,
        loader  : 'babel'
      },
      {
        test    : /\.json$/,
        loader  : 'json'
      },
      {
        test    : /\.sass$/,
        loader  : 'style!css!autoprefixer!sass?indentedSyntax'
      }
    ]
  }
}

if (isDevelopment === false) {
  config.module.loaders.push({
    test    : /\.jsx?$/,
    loader  : 'webpack-assert'
  })
}

module.exports = config
