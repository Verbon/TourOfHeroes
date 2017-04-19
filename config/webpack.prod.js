var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var extractTextPlugin = require('extract-text-webpack-plugin');
var commonfConfig = require('./webpack.common.js');
var helpers = require('./helpers.js');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonfConfig, {
    devtool: 'source-map',

    output: {
        path: helpers.root('bin/app'),
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                keep_fnames: true
            }
        }),
        new extractTextPlugin('[name].css'),
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV)
            }
        }),
        new webpack.LoaderOptionsPlugin({
            htmlLoader: {
                minimize: false
            }
        })
    ]
});