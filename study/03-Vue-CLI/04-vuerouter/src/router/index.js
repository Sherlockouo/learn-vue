//配置路由相关信息
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import User from '@/components/User'

//1 插件必须使用Vue.use(xxx) 安装插件
Vue.use(Router)

//2 创建VueRouter对象
export default new Router({
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
    },
    {
      path: '/user/:name',
      name:User,
      component: User
    }
  ],
  //默认为hash模式，
  //可以改为history模式
  mode:'history',
  linkActiveClass:'isactive'
})
