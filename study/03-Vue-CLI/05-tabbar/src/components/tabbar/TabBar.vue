<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>

  #tab-bar {
    display: flex;
    background-color: #e08888;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -10px 1px rgba(100, 100, 100, .3);
    vertical-align: middle;
  }

</style>
