const webpack = require('webpack');
const path = require('path');


module.exports = {
    entry: './src/client.js',
    externals: {
        jquery: 'window.$'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss'],
        alias:{
            routes: path.resolve(__dirname,'../src/routes/')
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            loaders: ["babel-loader", "eslint-loader"],
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader",
                options: {
                    sourceMap: true
                }
            }, {
                loader: "sass-loader",
                options: {
                    sourceMap: true,
                    includePaths: ["node_modules"]
                }
            }]
        }, {
            test: /\.css$/,
            use: [
                {
                    loader:'css-loader'
                }
            ]
        },{
            enforce: 'pre',
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'eslint-loader',
                query: {
                    configFile: './.eslintrc'
                },
            }],
        }]
    }
}