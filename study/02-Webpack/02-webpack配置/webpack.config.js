//动态获取路径
const path = require('path')

module.exports ={
  entry:'./src/main.js',
  output:{
    //拿到绝对路径 wc 是两个下划线 。。。
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js'
  }
}