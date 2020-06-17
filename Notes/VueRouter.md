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

### 5.懒加载 

 ![截屏2020-06-17 上午10.32.54](https://cdn.jsdelivr.net/gh/Sherlockouo/PicBase/img/learn/截屏2020-06-17 上午10.32.54.png)

![截屏2020-06-17 上午10.44.35](https://cdn.jsdelivr.net/gh/Sherlockouo/PicBase/img/learn/截屏2020-06-17 上午10.44.35.png)

```

const Home = ()=>import('../components/Home')
const About = ()=>import('../components/About')

  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      //一个path对应一个组件
      path: '/home',
      name: Home,
      component: Home
    },
    {
      path: '/about',
      name:About,
      component: About
    }
    ]
```

### 6.嵌套路由

![截屏2020-06-17 上午10.49.29](https://cdn.jsdelivr.net/gh/Sherlockouo/PicBase/img/learn/截屏2020-06-17 上午10.49.29.png)

```
   const News = ()=>import('../components/HomeNews')
	 const Message = ()=>import('../components/HomeMessage')

   {
      //一个path对应一个组件
      path: '/home',
      name: Home,
      component: Home,
      //子路由路径，可以不用写 /
      children: [
        {
        //默认路径
          path: '',
          //redirect 不加 /
          redirect:'news'
        },
        {
          path:'news',
          component:News
        },
        {
          path: 'message',
          component:Message
        }
      ]
    },
```

```
<template>
  <div>
    <h1>this is home</h1>
    <h3>this is the content of the home</h3>
		//在父组件中加入这些个东西 ，路径要写全
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view/>

  </div>
</template>
```

### 7.参数传递



![截屏2020-06-17 上午11.29.49](/Users/wdf/Library/Application Support/typora-user-images/截屏2020-06-17 上午11.29.49.png)

```
 
 <router-link tag="button" :to="{path:'/profile',query:{name:'leet',age:'14'}}">profile</router-link>
 <router-view></router-view>
 
```

Profile中：

```
<template>
  <div>
    <h1>Profile</h1>
    <h2>{{this.$route.query.name}}</h2>
    <h2>{{this.$route.query.age}}</h2>
  </div>
</template>

```

### 8.全局导航守卫

1. 方式一：在组件初始化 回调created()的时候，改掉document的title

   ```
     在组件中写上
     created() {
       // 古老方式改title
       //   document.title='首页'
         console.log('created!')
       },
   ```

   

2. 方式二：在路由中配置meta，更为方便简洁

   ```
   {
         //一个path对应一个组件
         path: '/home',
         name: Home,
         meta: {
         	//配置title
           title: '首页'
         },
         component: Home,
         children: [
           // {
           //   path: '',
           //   redirect: 'news'
           // },
           {
             path: 'news',
             meta: {
               title: 'news'
             },
             component: News
           },
           {
             path: 'message',
             meta: {
               title: 'message'
             },
             component: Message
           }
         ]
       },
   
   router.beforeEach((to,from,next)=>{
     document.title = to.meta.title
     next()
   })
   ```

   3.钩子

   ![截屏2020-06-17 下午10.11.11](https://cdn.jsdelivr.net/gh/Sherlockouo/PicBase/img/learn/截屏2020-06-17 下午10.11.11.png)

   1.  前置钩子
      1.  
   2.   后置钩子
      1.  
   3.  

   ![截屏2020-06-17 下午10.13.27](/Users/wdf/Library/Application Support/typora-user-images/截屏2020-06-17 下午10.13.27.png)

### 9.Vue周期

![](https://upload-images.jianshu.io/upload_images/1102036-582b0953653a8e87.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

