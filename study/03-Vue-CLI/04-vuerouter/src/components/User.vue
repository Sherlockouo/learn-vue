<template>
  <div>
    <h1>User信息</h1>
    <h3 v-for="(value,key) in user">{{key}}:{{value}}</h3>
    <h2>{{username}}</h2>
<!--    <router-link tag="button" to="/profile">profile</router-link>-->
<!--    <router-link tag="button" :to="{path:'/profile',query:{name:'leet',age:'14'}}">profile</router-link>-->

    <router-view></router-view>

  </div>
</template>

<script>
  export default {
    name: "User",
    data() {
      return {
        user:{
          name: 'xiaoming',
          age: 14,
          height: 1.88
        }
      }
    },
    computed:{
      username(){
        // params.后面的东西要和你index中路由配置的路径参数一致
        return this.$route.params.name
      }
    }
  }
</script>

<style scoped>
  span {
    color: #e27373;
  }
</style>
