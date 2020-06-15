const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config.js')

module.exports=webpackMerge(baseConfig,{
  devServer:{
    contentBase:'./dist',//提供本地服务
    inline:true,//页面实时刷新
    port:8001,
    // historyApiFallback:
  }
})