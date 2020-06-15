<template>
  <div>
    <h1>{{message}}</h1>
    <button @click="btc">anniu</button>
    <h2>{{time}}</h2>
    <cpn></cpn>
  </div>
</template>

<script>
  import cpn from './cpn.vue'

  export default {
    name: "App",
    data(){
      return {
        message: 'msg...',
        time:'2020'
      }
    },
    methods: {
      btc() {
        console.log(this.message)
      }
    },
    components:{
      cpn
    }
  }

</script>

<style scoped>
  .title{
    color: #71b3d7;
  }
</style>