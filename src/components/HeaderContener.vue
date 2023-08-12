<template>
    <div class="HeaderContener">
        <img alt="Kinopopik logo" class="HeaderLogo" src="../assets/Kinopopik.png">
        <HeaderNovigethion/>
          <!-- <input placeholder="Search Movies, Series..." button/> -->
          <!-- <div class="input-container">
            <button><img alt="Group" src="../assets/Group.png"></button>
            <input/>

          </div> -->
          <input type="text" class="icon" value placeholder="Search Movies, Series...">




    </div>
  </template>
  
  <script>
import HeaderNovigethion from './HeaderNovigethion.vue'
 export default {
  components: {
      HeaderNovigethion,
  
    },

name: 'HeaderContener'
}
  
  </script>
  
  <style>
  .HeaderContener{
  display: flex;
  align-items: top;
  justify-content: start;
  padding: 56px 92px;
  gap:30px;
  background: url("../assets/MainPoster.jpg") no-repeat;
  background-size: 100%;
  height: 940px;
}
 .HeaderLogo{
  width: 150px;
  height: 50px;
  padding: 20px,20px;
 }
 /* .HeaderContener input{
  display: flex;
  width: 295px;
  height: 39px;
  flex-shrink: 0;
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 0.20);
  background: rgba(0, 0, 0, 0.10);
  color: rgba(255, 255, 255, 0.60);
  /* font-family: Inter; 
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 70px, 70px, 0px,0px;
 } */
 /* #input-container {
  position: relative;
}

#input-container > img {
  position: absolute;
  top: 12px;
  left: 15px;
}

#input-container > input {
  padding-left: 40px;
} */
.icon {
  padding-left: 25px;
  background: url("../assets/Group.png") no-repeat right;
  background-size: 20px;
  width: 295px;
  height: 39px;
  flex-shrink: 0;
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 0.20);
  /* background: rgba(0, 0, 0, 0.10); */
  color: rgba(255, 255, 255, 0.60);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 70px, 70px, 10px,10px;
  padding-left: 40px;
} 
 </style>