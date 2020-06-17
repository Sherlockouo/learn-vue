<template>
  <div>
    <h1>{{message}}</h1>
    <button @click="btc">anniu</button>
    <cpn></cpn>
  </div>
</template>

<script>
  import cpn from './cpn.vue'

  export default {
    name: "App",
    data(){
      return {
        message: 'msg...'
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