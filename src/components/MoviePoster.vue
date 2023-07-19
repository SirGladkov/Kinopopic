<template>
    <div class="movie-poster">
      <img :src="movie.posterUrl" :alt="movie.title" />
      <h3>{{ movie.title }}</h3>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      movie: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style>
  
  .movie-poster {
    text-align: center;
  }
  
  .movie-poster img {
    width: 150px;
    height: 200px;
  }
  
  .movie-poster h3 {
    margin-top: 10px;
  }
  </style>