<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item link="/home">
        <img slot="item-icon" src="~assets/img/tabbar/internationalunclick.png" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/internationalclicked.png" alt="">
        <div slot="item-name">首页</div>
      </tab-bar-item>

      <tab-bar-item link="/category">
        <img slot="item-icon" src="./assets/img/tabbar/filterunclick.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/filterclicked.png" alt="">
        <div slot="item-name">分类</div>
      </tab-bar-item>

      <tab-bar-item link="/cart">
        <img slot="item-icon" src="./assets/img/tabbar/cart_empty.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/cart.png" alt="">
        <div slot="item-name">购物车</div>
      </tab-bar-item>

      <tab-bar-item link="/profile">
        <img slot="item-icon" src="./assets/img/tabbar/userunclick.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/userclicked.png" alt="">
        <div slot="item-name">我的</div>
      </tab-bar-item>
    </tab-bar>
    <router-view/>
  </div>
</template>

<script>
  import TabBar from "@/components/tabbar/TabBar";
  import TabBarItem from "@/components/tabbar/TabBarItem";
  export default {
    name: 'App',
    components:{
      TabBar,TabBarItem
    }
  }
</script>

<style>
  /*引用css文件*/
  @import "./assets/css/base.css";

  #app {
    display: flex;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
  }

</style>
