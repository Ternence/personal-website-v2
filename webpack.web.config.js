const path = require('path');
const webpack = require('webpack');
const webpackVisualizer = require('webpack-visualizer-plugin');

const VENDOR = [
  'react',
  'react-dom',
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
            filename: './webpack.stats.html',
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
    // https://github.com/webpack/webpack/issues/1275#issuecomment-245470919
    /*
    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
        }
    },
    */
};
