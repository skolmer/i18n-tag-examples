const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        'dist/index': './lib/index',
        'dist/de/index': './lib/de/index',
        'dist/es/index': './lib/es/index'
    },
    output: {
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            include: path.join(__dirname, 'lib')
        }]
    },
    externals: {
        'i18n': 'i18n',
        'i18nConfig': 'i18nConfig',
        'i18nGroup': 'i18nGroup',
        'react': 'react'
    }
};
