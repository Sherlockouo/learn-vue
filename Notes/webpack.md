## Webpack

> javascript应用的静态打包工具 
>
> 帮助我们处理包之间的依赖关系![截屏2020-06-13 下午11.17.53](https://cdn.jsdelivr.net/gh/Sherlockouo/PicBase/img/learn/截屏2020-06-13 下午11.18.53.png)



### 1.webpack安装

```
更换镜像源为淘宝
npm config set registry https://registry.npm.taobao.org

安装webpack -g表示(global)全局安装
npm install webpack -g 

全局安装CLI 
npm i webpack-cli -g
```



### 2.基本使用

```
｜
｜————
|    |dis存放打包后的东西，用于服务器发布
｜
｜————
|    |src存放写的代码，业务在这里写
｜
```

### 3.打包

**打包方式**

1. **webpack**  

   ```
   webpack ./src/main.js
   ```

   

2. **npm** run build

   需要配置package.json 和 webpack.config.json

   Package.json

   ```
   {
     "name": "t2",
     "version": "1.0.0",
     "description": "",
     "main": "webpack.config.js",
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1",
       //当输入npm run biuld的时候会转到这里，执行webpack
       //在此处执行build会优先使用本地的包进行打包 如果是在命令行进行打包，则会使用全局的webpack进行打包
       //如果需要在命令行，进行打包则需要 进入
       //cd ./node_modules/webpack 
       //再执行webpack命令
       "build": "webpack"
     },
     "author": "wdf",
     "license": "ISC"
   }
   
   ```

   Webpack.config.json

   ```
   //动态获取路径
   const path = require('path')
   
   module.exports ={
   //入口
     entry:'./src/main.js',
   //输出
     output:{
       //拿到绝对路径 wc 是两个下划线 。。。
       path:path.resolve(__dirname,'dist'),
       filename:'bundle.js'
     }
   }
   ```

   

   

3. **安装loader** ~~可以用来处理不同的文件~~

![image-20200614213028965](https://cdn.jsdelivr.net/gh/Sherlockouo/PicBase/img/learn/image-20200614213028965.png)

安装cssloader

```
npm install --save-dev style-loader css-loader
```



作用：

> 将css文件作为模块，进行打包

```
module:{
           rules: [
         {
           test: /\.css$/,
           //webpack使用多个loader的时候，从右往左读的
             use: [
             'style-loader',
             'css-loader',
           ],
           },
     ],
   },
```

4.**图片处理：**

![截屏2020-06-14 下午10.19.40](https://cdn.jsdelivr.net/gh/Sherlockouo/PicBase/img/learn/截屏2020-06-14 下午10.19.40.png)

```
  
   //output中添加 url匹配图片
    publicPath:'dist/'
    
    
  {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            // loader: 'file-loader',
            loader:'url-loader',
            options: {
              //当加载的图片，小于limit的时候，会将图片编译成base64的字符串形式
              //当加载的图片 大于limit的时候，需要使用file-loader来加载
              limit: 13000,
              //对文件进行重命名
               name:'img/[name].[hash:8].[ext]'
            }
          }
        ],
      },
```

![截屏2020-06-14 下午10.22.20](https://cdn.jsdelivr.net/gh/Sherlockouo/PicBase/img/learn/截屏2020-06-14 下午10.22.20.png)

5.将ES6转换为ES5,babel-loader

> 将ES6转换为ES5以更好的兼容浏览器

```
 npm install -D babel-loader @babel/core @babel/preset-env webpack

 
 
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
```

### 3.webpack配置Vue

```
npm install vue --save
```

vue有两种版本：

1. runtime only：代码中不允许有tempalte
2. runtime compiler：可以有template

加上下面这些就可以加载vue文件了

```
//15.x.x版本之后都需要使用这个插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')

rules:[
  {			
        test: /\.vue$/,
        use: ['vue-loader']
      },
]

resolve:{
    alias:{
    //import vue ｜vue.esm.js 能够进行 runtime compiler
        'vue$':'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ]
```

目录结构

![截屏2020-06-15 上午11.31.43](https://cdn.jsdelivr.net/gh/Sherlockouo/PicBase/img/learn/截屏2020-06-15 上午11.31.43.png)

1. 将组件单独抽取到vue中来写
2. 在main.js中注册
3. 最后在html中进行使用

Vue文件就被切分为单独的文件了

```
<template>
  <div>
    <h1>{{message}}</h1>
    <button @click="btc">anniu</button>
    <cpn></cpn>
  </div>
</template>

<script>
  import cpn from './cpn.vue'

  export default {
    name: "App",
    data(){
      return {
        message: 'msg...'
      }
    },
    methods: {
      btc() {
        console.log(this.message)
      }
    },
    components:{
      cpn
    }
  }

</script>

<style scoped>
  .title{
    color: #71b3d7;
  }
</style>
```

只需要在main.js中引用一下就可以了 

```
//1。使用commonjs的模块化开发规范
const {add, mul} = require('./mathUtils.js')

console.log(add(1, 3))
console.log(mul(1, 3))

//2.使用ES6的模块化规范开发
import * as aa from "./info.js"

console.log(aa.name)
console.log(aa.age)
console.log(aa.height)
//3.依赖css
require('../css/nor.css')

//4.依赖less文件
require('../css/typical.less')

//5.使用vue进行开发
import Vue from 'vue'

// import App from '../vue/app.js'
//这里使用
import App from '../vue/App.vue'
new Vue({
  el: '#app',
  template:'<App/>',
  components:{
    App
  }
})
```

4.将html打包进dist文件夹

```
npm install html-webpack-plugin
```

在webpack.config.json中配置

```
const html = require('html-webpack-plugin')

plugins:{
 new html({
        template:'index.html'
      }),
}
```



5.压缩js 使用这一个插件的时候，上一个插件会被覆盖掉

**开发阶段不需要配置**

```
npm install uglifyjs-webpack-plugin
```

打包js放到服务器

```
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')

new uglifyJsPlugin()
```

6.webpack-dev-server

cao 命令行敲不行，然后我就直接改package.json 再导入 	

```
npm install webpack-dev-server --save-dev //黑苹果安装失败。。。
```





