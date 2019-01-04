const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const commonConfig = require('./webpack.common.config.js');

const devConfig = {
    devtool: 'inline-source-map',
    entry: {
        app: [
            'babel-polyfill',
            'react-hot-loader/patch',
            path.join(__dirname, 'src/index.js')
        ]
    },
    output: {
        filename: '[name].[hash].js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader?modules&localIdentName=[local]-[hash:base64:5]',
                'postcss-loader'
            ]
        }]
    },
    devServer: {
        port: 8080,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '127.0.0.1',
        hot: true,
        proxy: {
            '/api/*': 'http://localhost:8090/$1'
        }
    }
};

module.exports = merge({
    customizeArray (a, b, key) {
        if (key === 'entry.app') {
            return b;
        }
        return undefined;
    }
})(commonConfig, devConfig);