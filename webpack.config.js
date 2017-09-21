const path = require('path');
const SRC_DIR = path.join(__dirname, 'src');
const DIST_DIR = path.join(__dirname, 'public');

module.exports = {
  devtool: "source-map",
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  }
}