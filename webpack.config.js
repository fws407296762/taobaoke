/**
 * Created by fws on 2017/10/26.
 */

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");  //提取文本到一个文件

let extractCss = new ExtractTextPlugin({    //提取 CSS 文件到 reset.css 文件中
    filename:"reset.css",
    allChunks:true
});
let extractScss = new ExtractTextPlugin({  //提取 SCSS 文件到 app.css 文件中
    filename:"static/css/app.css",
    allChunks:true
});

const config = {
    context: path.resolve(__dirname,"./src"),
    entry:{
        app:["./main.js"],
        vendors:[
            "react",
            "react-dom",
            "react-router"
        ]
    },
    output: {
        path:path.resolve(__dirname,"./build/"),
        filename: "static/js/[name].js"
    },
    module:{
        rules:[
            {
                test:/.js(x)?$/,
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ],
                loader:"babel-loader"
            },
            {
                test:/\.(css)$/,   //对 css 文件进行处理，文本的后缀正则一定要和 scss 有区别，不然执行ExtractTextPlugin会报错
                use:extractCss.extract({
                    fallback: "style-loader",
                    use:[
                            {
                                loader:"css-loader",
                                options: {
                                    minimize: true // css压缩
                                }
                            }
                        ],

                })
            },
            {
                test:/\.(scss)$/, //对 scss 文件进行处理
                use:extractScss.extract({
                    fallback: "style-loader",
                    use:[
                        {
                            loader:"css-loader",
                            options: {
                                minimize: true // css压缩
                            }
                        },
                        "sass-loader"]
                })
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name:["vendors"],
            filename:"static/js/vendors.js"
        }), //合并公共部分
        new HtmlWebpackPlugin({
            template:"./index.html",
            filename:"index.html",
            title:"啥都有券",
            inject:true,
            hash:true,
            minify:{
                removeComments:true,    //移除HTML中的注释
                collapseWhitespace:false    //删除空白符与换行符
            }
        }),
        new UglifyJSPlugin({
            uglifyOptions:{
            }
        }),
        extractCss,
        extractScss
    ],
    resolve: {
        extensions:[".js",".jsx"]
    },
    devServer: {
        host:"www.shadouyouquan.com"
    }
};

module.exports = config;