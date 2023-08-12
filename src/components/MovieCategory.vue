<template>
    <div class="movie-category">
      <h2>{{ category }}</h2>
      <div class="movie-list">
        <movie-poster v-for="movie in movies" :key="movie.id" :movie="movie" />
      </div>
    </div>
  </template>
  
  <script>
  import MoviePoster from './MoviePoster.vue'; 
  
  export default {
    components: {
      MoviePoster,
    },
    props: {
      category: {
        type: String,
        required: true,
      },
      movies: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style>
  
  .movie-category {
    margin-bottom: 20px;
    padding-left: 6%;
    
  }
  
  .movie-category h2 {
  text-align: left;
  margin-bottom: 10px;
  margin-left: 30px;
  color:aliceblue;
}

.movie-list {
  display: flex;
  flex-wrap: nowrap; /* Запрещаем перенос элементов на следующую строку */
  overflow-x: auto; /* Добавляем горизонтальный скролл, если элементов слишком много */
  justify-content: flex-start; /* Выравнивание элементов в начале контейнера */
  align-items: center; /* Выравнивание элементов по центру вертикали */
}

/* Дополнительные стили для постеров */
.movie-poster {
  text-align: center;
  margin-right: 20px; /* Добавляем небольшой отступ между постерами */
  
}

.movie-poster:last-child {
  margin-right: 0; /* Убираем отступ справа для последнего постера */
}

.movie-poster img {
  width: 150px;
  height: 200px;
  border-radius: 12px;
}

.movie-poster h3 {
  margin-top: 10px;
}

  </style>