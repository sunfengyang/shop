const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    productionSourceMap: false,
    devServer: {
        open: true
    },
    configureWebpack: config => {
        if(process.env.NODE_ENV === 'production'){ //判断是否是生产环境
            return {
                plugins: [
                    new CompressionPlugin({
                        test: /\.js$|\.html$|\.css$/,
                        threshold: 10240, //超过10k用gzip压缩
                        deleteOriginalAssets: false  //是否删除原文件
                    })
                ]
            }
        }
    }
}

// nginx：分布式服务管理