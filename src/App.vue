<template>
  <div>
    <HeaderContener/>
    <div class="movies-wrapper">
<!--      <movie-category v-for="(movies, category) in this.FILMS" -->
<!--      :key="category" -->
<!--      :category="category" -->
<!--      :movies="movies" -->
<!--      />-->
    <movie-list v-for="film in this.$store.state.films" :film="film" :key="film.id"/>
    </div>


  </div>

</template>

<script>
import HeaderContener from './components/HeaderContener.vue';
import MovieList from "@/components/MovieList.vue";
import {mapActions} from "vuex";
export default {
  components: {
    MovieList,
    HeaderContener,

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
      // FILMS () {
      //   return this.$store
      // }
    },
    methods:{
      ...mapActions([
          'getTopFilms'
      ]),
    },
    updated() {
      console.log(this.$store)
    },
    mounted(){
     this.$store.dispatch('GET_FILMS_FROM_API');
    },
  name: 'App',
}
  

</script>

<style>
body{
  margin: 0;
}
.movies-wrapper{
  display: grid;
  grid-template-columns: repeat(5, 20%);
  column-gap: 14px;
  row-gap: 50px;
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
