<template>
  <div id="app">
    <router-link active-class="isactive" tag="button" to="/home" replace>首页</router-link>
    <router-link tag="button" to="/about" replace>about</router-link>
    <router-link tag="button" v-bind:to="'/user/'+userid">用户信息</router-link>
    <button @click="profile">档案</button>

    <keep-alive exclude="Profile">
      <router-view/>
    </keep-alive>

    <!--    <router-view/>-->
    <!--    <button @click="sy">首页</button>-->
    <!--    <button @click="about">about</button>-->
    <!--将组件渲染到 router-view 中-->
  </div>
</template>

<script>
  export default {
    name: 'App',
    methods: {
      sy() {
        this.$router.push('/home')
      },
      about() {
        this.$router.push('/about')
      },
      profile() {
        // console.log(this.test())
        this.$router.push({
          path: '/profile',
          query: {
            name: 'xm',
            age: 14,
            height: 1.55
          }
        })
      }
    },
    data() {
      return {
        //动态绑定userid
        userid: 'xiaoming'
      }
    }
  }
</script>

<style>
  .isactive {
    color: #e27373;
  }

  button {
    font-size: 90px;
    border-radius: 89px;
    background: #2f546a;
  }
</style>
