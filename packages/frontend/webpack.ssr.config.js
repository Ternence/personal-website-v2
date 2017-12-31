/* eslint-env node */

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

module.exports = {
    target: 'node',
    entry: {
        Mark: './src/components/Mark.js',
    },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, 'ssr_build'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                include: path.join(__dirname, 'src'),
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['transform-runtime'],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: { warnings: false },
        }),
    ],
};
