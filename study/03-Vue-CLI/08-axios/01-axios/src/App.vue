<template>
  <div id="app">
    <img src="./assets/logo.png">
    <network></network>
    <router-view/>
  </div>
</template>

<script>
  import network from "./components/network";
export default {
  name: 'App',
  components:{
    network
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
