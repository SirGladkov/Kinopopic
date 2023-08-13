<template>
  <div class="film-wrapper">
    <img :src=film.image alt="No photo" class="poster"/>
    <span class="film-title">{{film.title}}}</span>
  </div>
</template>

<script>
  export default {
    props:{
      film:{
        type: Object,
        required: true
      }
    }
  }
</script>


<style scoped>
  .film-wrapper{
    width: 251px;
    height: 400px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.20);
  }
  .poster{
    width: inherit;
    height: inherit;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.20);
    object-fit: cover;
  }
  .film-title{
    color: white;
  }
</style>