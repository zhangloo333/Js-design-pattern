const path = require('path');
const HtmlWebpackPlugIn = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path:__dirname,
        filename: './release/bundle.js'
    },
    //translate es6 to es5
    module:{
        rules:[{
            test: /\.js?$/,
            exclude:/(node_modules)/,
            loader:'babel-loader'
        }]
    },

    //建立一个插件裂变，然后把 调用 package json的东西，新建一个列表
    plugins: [
        new HtmlWebpackPlugIn({
            template:'./index.html'
        })
    ],
    devServer : {
        contentBase: path.join(__dirname, './release'), //根目录
        open:true, //自动打开预览器
        port: 9000,
        proxy: {
            '/api/*':{ 
                target: 'http://localhost:8880'
            }
        }
    }
}