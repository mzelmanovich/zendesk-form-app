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
      loader: 'babel',
      query: {
        presets: ['react', 'es2015'],
        plugins: ['transform-object-rest-spread']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
