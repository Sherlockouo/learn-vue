<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle" :class="{active:isActive}">
      <slot name="item-name"></slot>
    </div>
  </div>

</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      link: String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    data() {
      return {
        // isActive: true
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.link)!==-1
      },
      activeStyle(){
        return this.isActive?{color: this.activeColor}:{}
      }
    },
    methods: {
      itemClick() {
        console.log('item click')
        if (this.link!=this.$route.path)
          this.$router.replace(this.link)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    display: flex;
    flex: 1;
    text-align: center;
    height: 100px;
  }

  .active {
    color: #e27373;
  }
</style>
