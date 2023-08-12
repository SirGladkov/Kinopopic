<template>
  <div>
    <HeaderContener/>
    <div>
      <movie-category v-for="(movies, category) in this.FILMS" 
      :key="category" 
      :category="category" 
      :movies="movies" 
      />
    </div>



  </div>

</template>

<script>
import HeaderContener from './components/HeaderContener.vue';
import MovieCategory from './components/MovieCategory.vue';
import getTopFilms from './api/IMDb.js';
import {mapActions, mapGetters} from 'vuex'
export default {
  components: {
    HeaderContener,
    MovieCategory,

  },
  props:{},
  data() {
    return {
      moviesByCategory: {
        Actions: [
          { id: 3, title: 'Фильм 3', posterUrl: require ('./assets/1.jpg') },
          { id: 4, title: 'Фильм 4', posterUrl: require ('./assets/1.jpg') },
          // Добавить другие фильмы
        ],
        Drams: [
          { id: 5, title: 'Фильм 5', posterUrl: require ('./assets/1.jpg') },
          { id: 6, title: 'Фильм 6', posterUrl: require ('./assets/1.jpg') },
          // Добавить другие фильмы
        ],
        Top100:[
          {}

        ]
        // Добавить другие категории
       },
      };

    },
    computed:{
      ...mapGetters([
        'FILMS'
      ]),
    },
    methods:{
      ...mapActions([
          'getTopFilms'
      ]),
    },
    mounted(){
      this.getTopFilms()
    },
  name: 'App',
}
  
getTopFilms()

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
  height: 100%;
  width: 100%;
}
</style>
