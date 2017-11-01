const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


var fs = require('fs')
const pkgPath = path.resolve(__dirname, '../package.json')
const pkg = fs.existsSync(pkgPath) ? require(pkgPath) : {}
let theme = {}
if (pkg.theme && typeof pkg.theme === 'string') {
  let cfgPath = pkg.theme
  // relative path
  if (cfgPath.charAt(0) === '.') {
    cfgPath = path.resolve(__dirname, cfgPath)
  }
  const getThemeConfig = require(cfgPath)
  theme = getThemeConfig()
} else if (pkg.theme && typeof pkg.theme === 'object') {
  theme = pkg.theme
}


module.exports = {
    entry: {
        bundle: './src/client.js',
        vendor: [
            'react',
            'react-dom',
            'classnames',
            'react-router-dom',
            'antd'
        ]
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, '../dist'),
        chunkFilename: '[name].[hash].js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss', 'less'],
        alias:{
            routes: path.resolve(__dirname,'../src/routes/'),
            fogcomp: path.resolve(__dirname, '../src/fogcomps'),
            reduxSrc: path.resolve(__dirname,'../src/redux'),
            tools: path.resolve(__dirname,'../src/tools')
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            loaders: ["babel-loader", "eslint-loader"],
            exclude: /node_modules/,
        }, 
        {
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
        }, 
        {
            test: /\.css$/,
            use: [
                {
                    loader:'css-loader'
                }
            ]
        },
        {
            test:/\.less$/,
            exclude: path.resolve(__dirname, '../node_modules'),
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use:[
                    {loader: 'css-loader'},
                    {loader: 'less-loader'}
                ]
            })
        },
        {
            test: /\.less$/,
            include: path.resolve(__dirname, '../node_modules/antd'),
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                  {
                    loader: 'css-loader',
                  },
                  {
                    loader: 'less-loader',
                    options: {
                      sourceMap: true,
                      modules: false,
                      modifyVars: theme,
                    },
                  },
                ],
            })
        },
        {
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
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'bundle.css',
            disable: false,
            allChunks: true
        }),
    ]
}