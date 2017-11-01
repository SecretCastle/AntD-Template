const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const basejs = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = merge(basejs, {
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'../index.html')
        }),
        new OpenBrowserPlugin({
            url: `http://localhost:3000/#`,
        })
    ],
    devServer: {
        //开发模式下的代理
        // proxy: {
        //     '/categories': {
        //         target: 'https://api2.qingting.fm/v6/media',
        //         changeOrigin: true,
        //         secure: false,
        //         pathRewrite: {
        //             '^/categories': '/categories'
        //         }
        //     }
        // }
    }
});