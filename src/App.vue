<template>
  <div>
    <HeaderContener/>



  </div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HeaderContener from './components/HeaderContener.vue'
export default {
  components: {
    HeaderContener,

  },

  name: 'App',
 
}

</script>

<style>
body{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: none;
  /* margin-top: 60px; */
  background-color:#111111;
  height: 100vh;
  width: 100%;
}
</style>
