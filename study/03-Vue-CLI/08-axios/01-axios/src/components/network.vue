<template>
  <div>
    <h2>{{articles}}</h2>
  </div>
</template>

<script>
  import {request} from "../network/request";

  export default {
    name: "network",
    data(){
      return {
        articles:[]
      }
    },
    created() {
      request({
          url:'/article/all',
          params:{
            pageNo:1,
            pageSize:10
          }
      }).then(res=>{
        this.articles = res
      }).catch(err=>{
        console.log(err)
      })
    }
  }
</script>

<style scoped>

</style>
