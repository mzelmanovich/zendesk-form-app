const path = require('path');

module.exports = {
  entry: [
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'assets'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015'],
        plugins: ['transform-object-rest-spread']
      }
    },
    {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    },
    { test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000' }]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  }
};
