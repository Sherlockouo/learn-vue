import Vue from 'vue'
import Router from 'vue-router'
import TabBar from "../components/tabbar/TabBar";
import Home from "../veiws/home/Home"
import Cart from "../veiws/cart/Cart";
import Category from "../veiws/category/Category";
import Profile from "../veiws/profile/Profile"

Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/',
      name: 'TabBar',
      component: TabBar
    },
    {
      path: '/home',
      name:'Home',
      component: Home
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ],
  mode:'history',
})

export default router
