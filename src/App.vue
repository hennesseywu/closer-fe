<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
  // beforeDestroy() {
  //   Cookies.remove('GroukAuth');
  //   Cookies.remove('user');
  // }
}
</script>

<style scoped>
  #app {
    height: 100%;
  }
</style>