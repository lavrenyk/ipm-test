<template>
  <div id="app">
    <gantt msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Gantt from './components/Gantt.vue'

export default {
  name: 'App',
  components: {
    Gantt
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
