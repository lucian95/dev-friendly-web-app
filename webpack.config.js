module.exports = {
  entry: './app/assets/scripts/main.js',
  output: {
    path: __dirname + '/app/bundles',
    filename: 'script-bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};
