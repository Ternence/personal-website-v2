const path = require('path');
const webpack = require('webpack');
const webpackVisualizer = require('webpack-visualizer-plugin');

const VENDOR = [
    'styled-components',
];

module.exports = {
    entry: {
        app: './app/assets/jsx/index.js',
        vendor: VENDOR,
    },
    output: {
        path: path.join(__dirname, 'build', 'public'),
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
        new webpackVisualizer({
            filename: './statistics.html',
        }),
    ],
    module: {
        rules: [
            {
                include: path.join(__dirname, 'app'),
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
