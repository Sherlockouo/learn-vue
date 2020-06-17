<template>
  <div>
    <h1>this is home</h1>
    <h3>this is the content of the home</h3>

    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view/>

  </div>
</template>

<script>
  export default {
    name: "home",
    data(){
      return {
        path:'/home/news'
      }
    },
    created() {
    // 古老方式改title
    //   document.title='首页'
      console.log('created!')
    },
    updated() {
      console.log('updated!')
    },
    destroyed() {
      console.log('destroyed!')
    },
    mounted() {
      console.log(this)
    },
    //下面这两个函数在keep-alive时才有效
    activated() {
      //活跃的时候push记录
      console.log('home activated')
      this.$router.push(this.path)
    },
    deactivated() {

    },
    beforeRouteLeave(to,from,next){
      // 离开的时候将path改为记录中的path
      console.log(this.$route.path);
      this.path = this.$route.path;
      next()
    }
  }
</script>

<style scoped>
  h1 {
    color: #20b7e5;
  }

  h3 {
    color: #e27373;
  }
</style>
