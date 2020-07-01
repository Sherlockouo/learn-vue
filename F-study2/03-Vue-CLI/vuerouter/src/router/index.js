// 配置路由相关信息
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'

// 1.通过Vue.use（插件），安装插件
Vue.use(Router)

// 2.创建Router对象
export default new Router({
  // 配置路由模式
  mode:'history',
  // 配置路由和组件顶峰映射关系
  routes: [
    {
      path: '',
      redirect:'/home'
    },
    {
      path: '/Home',
      component: Home
    },
    {
      path: '/ab',
      component: About
    }
  ]
})
