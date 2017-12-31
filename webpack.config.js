const path = require('path');
const webpack = require('webpack');
const webpackVisualizer = require('webpack-visualizer-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const VENDOR = [
    'styled-components',
];

module.exports = {
    entry: {
        app: './src/web/main.js',
        vendor: VENDOR,
    },
    output: {
        path: path.join(__dirname, 'build', 'web', 'public'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: { warnings: false },
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
        }),
        new CopyWebpackPlugin([
            { from: 'src/web/public' }
        ]),
        new webpackVisualizer({
            filename: './statistics.html',
        }),
    ],
    module: {
        rules: [
            {
                include: path.join(__dirname, 'src'),
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    },
    externals: {
        'react': 'window.React',
        'react-dom': 'window.ReactDOM'
    }
};