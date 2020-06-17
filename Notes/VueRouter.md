## Vue-Router

### 1.SPA单页面应用简单介绍

> 单页应用（英语：single-page application，缩写SPA）是一种网络应用程序或网站的模型，它通过动态重写当前页面来与用户交互，而非传统的从服务器重新加载整个新页面。这种方法避免了页面之间切换打断用户体验，使应用程序更像一个桌面应用程序。在单页应用中，所有必要的代码（HTML、JavaScript和CSS）都通过单个页面的加载而检索[1]，或者根据需要（通常是为响应用户操作）动态装载适当的资源并添加到页面。尽管可以用位置散列或HTML5历史API来提供应用程序中单独逻辑页面的感知和导航能力，但页面在过程中的任何时间点都不会重新加载，也不会将控制转移到其他页面。[2]与单页应用的交互通常涉及到与网页服务器后端的动态通信。 ————维基百科

![截屏2020-06-16 下午5.19.03](https://cdn.jsdelivr.net/gh/Sherlockouo/PicBase/img/learn/截屏2020-06-16 下午5.19.03.png)

单页面应用与多页面应用的区别：

|                   | 单页面应用（SinglePage Web Application，SPA）                | 多页面应用（MultiPage Application，MPA）     |
| ----------------- | ------------------------------------------------------------ | -------------------------------------------- |
| 组成              | 一个外壳页面和多个页面片段组成                               | 多个完整页面构成                             |
| 资源共用(css,js)  | 共用，只需在外壳部分加载                                     | 不共用，每个页面都需要加载                   |
| 刷新方式          | 页面局部刷新或更改                                           | 整页刷新                                     |
| url 模式          | a.com/#/pageone   a.com/#/pagetwo                            | a.com/pageone.html   a.com/pagetwo.html      |
| 用户体验          | 页面片段间的切换快，用户体验良好                             | 页面切换加载缓慢，流畅度不够，用户体验比较差 |
| 转场动画          | 容易实现                                                     | 无法实现                                     |
| 数据传递          | 容易                                                         | 依赖 url传参、或者cookie 、localStorage等    |
| 搜索引擎优化(SEO) | 需要单独方案、实现较为困难、不利于SEO检索 可利用服务器端渲染(SSR)优化 | 实现方法简易                                 |
| 试用范围          | 高要求的体验度、追求界面流畅的应用                           | 适用于追求高度支持搜索引擎的应用             |
| 开发成本          | 较高，常需借助专业的框架                                     | 较低 ，但页面重复代码多                      |
| 维护成本          | 相对容易                                                     | 相对复杂                                     |



### 2.html的WebApi history 

**location.hash=' '** 对路径进行哈希

```
location.hash = 'path' //return a hashed value

history.pushState({},'','path')
```

**pushState() demo** 加入浏览记录

```
const state = { 'page_id': 1, 'user_id': 5 }
const title = ''
const url = 'hello-world.html'

history.pushState(state, title, url)
```

History.back() 记录-1回到上一条记录

```
history.back()
```

**replaceState({state},'title','path')**  清空浏览记录

```
history.replaceState({},'','foot')
```

History.go(n) n:正的表示前进 负的表示后退

```
history.go(-1) == history.back()
history.go(1) == history.forward()
```

### 3. 配置路由

![截屏2020-06-16 下午5.42.39](https://cdn.jsdelivr.net/gh/Sherlockouo/PicBase/img/learn/截屏2020-06-16 下午5.42.39.png)

1. 配置路由

```
//在index.js中
//配置路由相关信息
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

//1 插件必须使用Vue.use(xxx) 安装插件
Vue.use(Router)

//2 创建VueRouter对象
export default new Router({
  routes: [
    {
      //一个path对应一个组件
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
```

2. **配置默认路径**

   ```
   //在index.js中
   //2 创建VueRouter对象
   export default new Router({
     routes: [
       {
         //一个path对应一个组件
         path: '/home',
         name: 'home',
         component: home
       },
       {
         path: '/about',
         name:about,
         component: about
       },
       {
       	//将路径转到/home
         path: '/',
         redirect:'/home'
       }
     ]
   })
   
   ```

   

3. 修改浏览器模式 history ｜ hash

   ```
   //在index.js中
   //2 创建VueRouter对象
   export default new Router({
     routes: [
       {
         //一个path对应一个组件
         path: '/home',
         name: 'home',
         component: home
       },
       {
         path: '/about',
         name:about,
         component: about
       },
       {
         path: '/',
         redirect:'/home'
       }
     ],
     //默认为hash模式，
     //可以改为history模式
     mode:'history'
   })
   ```

   

4. Router-link
![截屏2020-06-16 下午10.27.06](/Users/wdf/Library/Application Support/typora-user-images/截屏2020-06-16 下午10.27.06.png)

   ```
   //routerlink中添加tag属性
   tag=""//可以设置为button,li...
   replace:无法返回上一步操作
   active-class：可以选中之后用来改变颜色 或者在index.js 中全局配置
   
   ```

   ![截屏2020-06-16 下午6.07.56](https://cdn.jsdelivr.net/gh/Sherlockouo/PicBase/img/learn/截屏2020-06-16 下午6.07.56.png)

5. 动态路由

   动态拼接url

   1. 配置路由 

      ```
         {
            path: '/user/:name',
            name:User,
            component: User
          }
      ```

      

   2. 在App中动态bind

   ```
       <router-link  tag="button" v-bind:to="'/user/'+userid">用户信息</router-link>
       /**
       中间部分省略
       **/
        data(){
         return {
           //动态绑定userid
           userid:'xiaoming'
         }
       }
   ```
   

   ### 4. vue项目打包

   结构分析

![截屏2020-06-16 下午11.21.42](/Users/wdf/Library/Application Support/typora-user-images/截屏2020-06-16 下午11.21.42.png)

js文件夹中

1. app.xx保存你的所有业务代码

   将你的所有业务代码打包

2.   manifest

   为打包的代码做底层支撑

3. vendor

   第三方提供的服务

### 5.