<template>
  <div id="app">
    <div id="nav">
      <main-tab-bar></main-tab-bar>
      <home></home>
      <category></category>
      <router-view></router-view>
    </div>
    <router-view/>
  </div>
</template>


<script>
  import MainTabBar from 'components/content/mainTabbar/MainTabBar'
  import Home from 'views/home/Home'
  import Category from 'views/category/Category'
  export default {
    name:'app',
    components:{
      MainTabBar,Home,Category
    }
  }

</script>


<style>
  @import "assets/css/base.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
