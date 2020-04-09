<template>
  <div class="container-fluid"  id="app">
    <List />
    <Timer />

  </div>
</template>

<script>
import  List from '@/components/List.vue';
import  Timer from '@/components/Timer.vue';
export default {
  name: 'App',
  components : {
    List,
    Timer,
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  background-color: #9D9D9D;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
