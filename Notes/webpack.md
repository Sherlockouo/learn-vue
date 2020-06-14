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

   

   

3. 安装loader ~~可以用来处理不同的文件~~

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

4.图片处理：

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