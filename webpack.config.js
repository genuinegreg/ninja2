module.exports = {
  entry: "./app/entry.js",
  output: {
    path: 'dist',
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
    }, {
      test: /\.(png|jpeg|jpg)$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'file?name=assets/[hash].[ext]',
    }]
  }
};
