const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/main.js'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader'
                }
            },
            {
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                }, {
                    loader: 'expose-loader',
                    options: '$'
                }]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        "babelrc": false,
                        "plugins": [
                            "dynamic-import-webpack"
                        ]
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            favicon: 'favicon.ico',
            template: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
};