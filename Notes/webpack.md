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

1. webpack  

   ```
   webpack ./src/main.js
   ```

   

2. npm run build

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
     entry:'./src/main.js',
     output:{
       //拿到绝对路径 wc 是两个下划线 。。。
       path:path.resolve(__dirname,'dist'),
       filename:'bundle.js'
     }
   }
   ```

   

   

3. 