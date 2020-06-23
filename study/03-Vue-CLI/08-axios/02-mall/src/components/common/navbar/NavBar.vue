<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar{
    width: 100%;
    margin-top: 0;
    display: flex;
    line-height: 44px;
    text-align: center;
  }
  .center{
    flex: 1;
    background-color: #ee8fb9;
    box-shadow: 0 1px 1px rgb(189, 129, 129);
  }
  .left,.right{
    width: 60px;
    background-color: #ee8fb9;
    box-shadow: 0 1px 1px rgb(189, 129, 129);
  }
</style>
