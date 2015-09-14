var webpack = require( 'webpack' );

module.exports = {
  context: __dirname + '/app',
  entry: {
    javascript: './scripts/app.js',
    html: './index.html'
  },
  output: {
    filename: 'app.js',
    path: __dirname + '/dist',
  },
  resolve: {
    extensions: [ '', '.js', '.jsx', '.json' ]
  },
  plugins: [new webpack.optimize.UglifyJsPlugin()],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.jsx$/,
        loaders: ['babel-loader']
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      }
    ]
  }
}
