let path = require('path')
let htmlplugin = require('html-webpack-plugin')
let vueloaderplugin = require('vue-loader/lib/plugin')
const exhtmlplugin = new htmlplugin({
    template:'./src/index.html',
}) 
module.exports = {
    mode:'development',
    entry:'/src/main.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    devServer:{
        port:3001,
        open:true,
        // proxy:{
        //     ["/img-api"]:{
        //     target:'http://image.zhangxinxu.com/image/study/s/s256/mm14.jpg',
        //       changeOrigin:true,
        //         pathRewrite: {
        //             ['^' + "/img-ap"]: ''
        //         }
        //     }
        // }
    },
    plugins:[
        exhtmlplugin,
        new vueloaderplugin()
    ],
    module:{
        rules:[
           
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],//表示预掉插件的集合
                    }
                },
               
            },
            {
                test:/\.vue$/,
                use:'vue-loader'
            },
            {
                test: /\.styl(us)?$/,
                use: [
                  'vue-style-loader',
                  'css-loader',
                  'stylus-loader'
                ]
            },
            {
                test:/\.scss$/,
                //新版本处理scss
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: "[name].[ext]",
                    outputPath: './fonts'
                }
            },
        ]
    }

}