<template>
  <div>
    <h1>{{task}}</h1>
    <span v-for="item in ms">{{item}}</span>
  </div>
</template>

<script>
  export default {
    name: "cpn",
    data(){
      return {
        ms:['ni','hao','ma']
      }
    }
  }
</script>

<style scoped>
  h1{
    color: #20b7e5;
  }
</style>