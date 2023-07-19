<template>
  <div>
    <HeaderContener/>
    <div>
      <movie-category v-for="(movies, category) in moviesByCategory" :key="category" :category="category" :movies="movies" />
    </div>



  </div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HeaderContener from './components/HeaderContener.vue';
import MovieCategory from './components/MovieCategory.vue';
export default {
  components: {
    HeaderContener,
    MovieCategory,

  },
  data() {
    return {
      moviesByCategory: {
        'Action': [
          { id: 1, title: 'Фильм 1', posterUrl: '../assets/1.jpg' },
          { id: 2, title: 'Фильм 2', posterUrl: '../assets/1.jpg' },
          // Добавить другие фильмы
        ],
        'Drama': [
          { id: 3, title: 'Фильм 3', posterUrl: '../assets/1.jpg' },
          { id: 4, title: 'Фильм 4', posterUrl: '../assets/1.jpg' },
          // Добавить другие фильмы
        ],
        // Добавить другие категории
       },
      };
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
