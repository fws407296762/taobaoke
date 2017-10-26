/**
 * Created by fws on 2017/10/26.
 */

const webpack = request("webpack");

const config = {
    entry:{
        app:"index.js"
    },
    output: {
        filename: "build/static/[name].js"
    },
    module:{
        rules:[
            {
                test:/.js(x)?$/,
                loader:"babel-loader"
            }
        ]
    },
    resolve: {
        extensions:[".js",".jsx"]
    }
};

module.exports = config;