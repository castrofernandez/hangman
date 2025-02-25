const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',   
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },  
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            },]
        },
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader', 'eslint-loader']
        }]
    },
    plugins: [                           
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'React+Redux hangman',
            inject: false,
            template: require('html-webpack-template'),
            bodyHtmlSnippet: '<link href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah|Permanent+Marker" rel="stylesheet"></link><main class="main" id="app"></main>'
        })   
    ]
});