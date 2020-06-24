<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" class="tab-control-item" :class="{active:index===currentIndex}" @click="tabclick(index)">
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
   },
    data(){
      return {
        currentIndex:-1
      }
    },
    methods: {
      tabclick(index){
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    align-items: center;
    background-color: #94e2ea;
  }
  .tab-control-item{
    flex: 1;
    height: 40px;
    line-height: 40px;
  }
  .tab-control-item span{
    padding: 2px;
  }
  .active{
    color:var(--color-high-text);
  }
  .active span{
    border-bottom: 3px solid var(--color-tint);
  }
</style>
