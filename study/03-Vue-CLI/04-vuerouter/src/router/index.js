//配置路由相关信息
import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
// import About from '@/components/About'
import User from '@/components/User'

const Home = () => import('../components/Home')
const About = () => import('../components/About')
const News = () => import('../components/HomeNews')
const Message = () => import('../components/HomeMessage')
const Profile = () => import('../components/Profile')
//1 插件必须使用Vue.use(xxx) 安装插件
Vue.use(Router)

//2 创建VueRouter对象
const router =  new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      //一个path对应一个组件
      path: '/home',
      name: Home,
      meta: {
        title: '首页'
      },
      component: Home,
      children: [
        {
          path: '',
          redirect: 'news'
        },
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
    {
      path: '/about',
      name: About,
      meta: {
        title: '关于'
      },
      component: About
    },
    {
      path: '/user/:name',
      name: User,
      meta: {
        title: '用户'
      },
      component: User,
    },
    {
      path: '/profile',
      meta: {
        title: 'profile',
      },
      component: Profile
    }
  ],
  //默认为hash模式，
  //可以改为history模式
  mode: 'history',
  linkActiveClass: 'isactive',
})

//前置钩子，跳转之前回调
router.beforeEach((to,from,next)=>{
  document.title = to.meta.title
  next()
})

//后置钩子
// router.afterEach((to,from)=>{
//   console.log('----after----')
// })

export default router
