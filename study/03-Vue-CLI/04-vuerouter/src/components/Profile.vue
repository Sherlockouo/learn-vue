<template>
  <div>
    <h1>Profile</h1>
    <h2>{{this.$route.query.name}}</h2>
    <h2>{{this.$route.query.age}}</h2>
    <h2>{{this.$route.query.height}}</h2>

  </div>
</template>

<script>
  export default {
    name: "Profile",
    activated() {
      console.log('profile activated')
    },
    deactivated() {
      console.log('profile deactivated')
    }
  }
</script>

<style scoped>

</style>
