'use strict';

var gulp = require( 'gulp' );
var gutil = require( 'gulp-util' );
var webpack = require( 'webpack' );
var WebpackDevServer = require( 'webpack-dev-server' );
var serverport = 5000;

gulp.task( 'webpack', function(callback) {
  webpack( require('./webpack.config.js'), function(err, stats) {
      if(err) throw new gutil.PluginError('webpack', err);
  });
});

gulp.task('webpack-dev-server', function() {
    // Start a webpack-dev-server
    var compiler = webpack( require('./webpack.config.js') );

    new WebpackDevServer(compiler, {
    }).listen( serverport, 'localhost', function(err) {
        if(err) throw new gutil.PluginError( 'webpack-dev-server', err );

        gutil.log( 'opened :' + serverport );

    });
});

gulp.task('default', ['webpack-dev-server']);
