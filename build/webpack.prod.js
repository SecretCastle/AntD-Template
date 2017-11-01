const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const basejs = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = merge(basejs, {
    plugins: [
        new webpack.BannerPlugin('This file was created by SecretCastle'),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor.[hash]', // 入口文件名
            filename: 'vendor.[hash].bundle.js', // 打包后的文件名
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap:true,
            beautify: false,
            minimize: true,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true,
                warnings:false
            },
            comments: false
        }),
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'../dist/index.html')
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/i,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true
        })
    ]
});