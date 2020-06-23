<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addStu">addStu</button>
    <button @click="update">update</button>
    <button @click="plus">+</button>
    <button @click="minus">-</button>

    <router-view/>
  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex";

  export default {
    name: 'App',
    data() {
      return {
        message: 'this is message',
        count: 0,
        stu: {
          id: 1,
          name: 'sherlock',
          age: 25,
        }
      }
    },
    methods: {
      plus() {
        this.$store.commit('plus')
      },
      minus() {
        this.$store.commit('minus')
      },
      getById() {
        this.$store.commit('getTodoById')
      },
      addStu() {

        this.$store.commit('addStu', {
          stu: {
            id: 1,
            name: 'sherlock',
            age: 25,
          }
        })
      },
      update() {
        // this.$store.commit('updateStu')
        // this.$store.dispatch('updateStu', {
        //     message:'payload message',
        //     success: () => {
        //       console.log('payload加载完成')
        //     }
        //   }
        // )
        this.$store.dispatch('updateStu','this is payload')
          .then(res=>{
            console.log(res)
            console.log('finished!')
          })
      }
    },
    components: {
      HelloVuex
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
