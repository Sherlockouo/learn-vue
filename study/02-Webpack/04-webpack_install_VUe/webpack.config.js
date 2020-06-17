//动态获取路径
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: './src/js/main.js',
  output: {
    //拿到绝对路径 wc 是两个下划线 。。。
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    //公共url匹配图片
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        //webpack使用多个loader的时候，从右往左读的
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        //匹配所有less文件: $:结尾
        test: /\.less$/,
        //webpack使用多个loader的时候，从右往左读的
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            // loader: 'file-loader',
            loader: 'url-loader',
            options: {
              //当加载的图片，小于limit的时候，会将图片编译成base64的字符串形式
              //当加载的图片 大于limit的时候，需要使用file-loader来加载
              limit: 1300,
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
    ],
  },
  resolve:{
    alias:{
        'vue$':'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ]
}