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
      test: /\.(png|jpeg|jpg|(map|atlas)\.json)$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'file?name=assets/[hash].[ext]',
    }, {
      test: /\.tileset\.json$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'json',
    }]
  }
};
