'use strict';

var gulp = require( 'gulp' );
var gutil = require( 'gulp-util' );
var webpack = require( 'webpack' );
var WebpackDevServer = require( 'webpack-dev-server' );
var serverport = 5000;

var config = {
  context: __dirname + '/app',
  entry: {
    javascript: './scripts/app.js',
    html: './index.html'
  },
  output: {
    filename: 'app.js',
    path: __dirname + '/dist',
  },
  plugins: [new webpack.optimize.UglifyJsPlugin()],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader']},
      {test: /\.html$/, loader: 'file?name=[name].[ext]'}
    ]
  }
};

gulp.task( 'webpack', function(callback) {
  webpack( config, function(err, stats) {
      if(err) throw new gutil.PluginError('webpack', err);
  });
});

gulp.task('webpack-dev-server', function() {
    // Start a webpack-dev-server
    var compiler = webpack( config );

    new WebpackDevServer(compiler, {
    }).listen( serverport, 'localhost', function(err) {
        if(err) throw new gutil.PluginError( 'webpack-dev-server', err );

        gutil.log( 'opened :' + serverport );

    });
});

gulp.task('default', ['webpack-dev-server']);
