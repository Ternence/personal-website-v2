/* eslint-env node */

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackVisualizer = require('webpack-visualizer-plugin');

const VENDOR = ['styled-components'];

const baseConfig = {
    entry: {
        app: './src/public/main.js',
        vendor: VENDOR,
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'assets/[name].js',
    },
    module: {
        rules: [
            {
                include: path.join(__dirname, 'src'),
                test: /\.js$/,
                use: 'babel-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
    plugins: [
        new CopyWebpackPlugin(
            [
                { from: 'service-worker.js' },
                { from: 'profile.jpg' },
                { from: 'keybase.txt' },
                { from: 'manifest.json' },
                { from: 'favicon.ico' },
            ],
            {
                context: 'src/public',
            },
        ),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
        }),
    ],
};

// Dev Stuff
if (process.env.NODE_ENV === 'production') {
    module.exports = merge(baseConfig, {
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                minimize: true,
                compress: { warnings: false },
            }),
            new CopyWebpackPlugin([
                { from: 'src/public/index.html', to: 'index.html' },
            ]),
        ],
        externals: {
            react: 'React',
            'react-dom': 'ReactDOM',
        },
    });
} else {
    module.exports = merge(baseConfig, {
        devServer: {
            contentBase: path.join(__dirname, 'build'),
            compress: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'bin/index.dev.template.ejs',
                inject: 'body',
            }),
            new WebpackVisualizer({
                filename: './statistics.html',
            }),
        ],
    });
}
