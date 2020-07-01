<template>
  <div id="app">
<!--    实现路由跳转，最终渲染为<a></a>标签-->
<!--    使用replace使得返回按钮失效，原生为history.replaceState-->
    <router-link to="/Home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="ab" tag="button" replace active-class="active">关于</router-link>
    <!--    必须的，实现占位-->
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/*.router-link-active{*/
/*  color: red;*/
/*}*/
  .active{
    color:red;
  }
</style>
