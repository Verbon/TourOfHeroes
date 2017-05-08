var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var extractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    entry: {
        'polyfills': './src/app/polyfills.ts',
        'vendor': './src/app/vendor.ts',
        'main': './src/app/main.ts'
    },

    target: 'electron-renderer',
    node: {
        __dirname: false,
        __filename: false
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            configFileName: helpers.root('src', 'app', 'tsconfig.json')
                        }
                    },
                    'angular2-template-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[ext]'
            },
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'app', 'app'),
                loader: extractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: 'css-loader?sourceMap'
                })
            },
            {
                test: /\.css$/,
                include: helpers.root('src', 'app', 'app'),
                loader: 'raw-loader'
            }
        ]
    },

    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            helpers.root('src', 'app'),
            {}
        ),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['index', 'vendor', 'polyfills']
        }),

        new htmlWebpackPlugin({
            template: 'src/app/index.html'
        })
    ]
};