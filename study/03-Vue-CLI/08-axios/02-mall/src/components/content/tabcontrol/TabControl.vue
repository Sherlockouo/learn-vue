<template>
  <div class="tab-control">
    <div v-for="item in titles" class="tab-control-item">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    align-items: center;
    background-color: #ee8fb9;
  }
  .tab-control-item{
    flex: 1;
    height: 40px;
    line-height: 40px;
  }
</style>
