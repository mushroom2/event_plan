const webpack = require('webpack');

const config = {
    entry:  __dirname + '/js/index.jsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    module: {
      rules: [
        {
          test: /\.js?/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        { test: /(\.css$)/, loaders: ['style-loader', 'css-loader'] }
      ]
    }
};

module.exports = config;

