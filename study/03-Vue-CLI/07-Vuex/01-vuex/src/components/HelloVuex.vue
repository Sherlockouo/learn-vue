<template>
  <div>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.state.message}}</h2>
    <h3>{{$store.getters.doneTodos}}</h3>
    <h4>{{$store.getters.getTodoById($store.state.counter)}}</h4>

    <h4>{{$store.getters.getStu}}</h4>

    <h2>{{$store.state.a.name}}</h2>
    <button @click="upname">upname</button>
  </div>
</template>

<script>
  export default {
    name: "HelloVuex",
    methods:{
      upname(){
        this.$store.dispatch('acupdateName','new name')
      }
    }
    // data(){
    //   return {
    //     message:'vuex',
    //     counter:0
    //   }
    // }
  }
</script>

<style scoped>

</style>
