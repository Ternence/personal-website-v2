const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './assets/components-entrypoint.jsx',
    target: 'node',
    output: {
        libraryTarget: 'commonjs',
        path: 'server-side-renderer',
        filename: 'bundle.js'
    },
    externals: [ /^(?!\.|\/).+/i, ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
};
