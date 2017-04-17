const path = require('path');
const webpack = require('webpack');

const SHA = require('child_process').execSync('git rev-parse HEAD').toString().trim();
const OUTPUT = `mark-website-${SHA}.js`;

module.exports = {
    entry: './assets/components-entrypoint.jsx',
    target: 'node',
    output: {
        libraryTarget: 'commonjs2',
        path: path.join(__dirname, 'ssr_bundles'),
        filename: OUTPUT,
    },
    module: {
        rules: [
            {
                include: path.join(__dirname, 'assets'),
                test: /\.jsx?$/,
                use: 'babel-loader',
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.ProvidePlugin({
            "React": "react",
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: { warnings: false },
        }),
    ]
};
