const path = require('path');
const webpack = require('webpack');
const webpackVisualizer = require('webpack-visualizer-plugin');

const VENDOR = [
    'hypernova-react',
    'styled-components',
];

module.exports = {
    entry: {
        app: './assets/jsx/index.jsx',
        vendor: VENDOR,
    },
    output: {
        path: path.join(__dirname, 'build'),
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
                include: path.join(__dirname, 'assets'),
                test: /\.jsx?$/,
                use: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    externals: {
        'react': 'window.React',
        'react-dom': 'window.ReactDOM'
    }
};
