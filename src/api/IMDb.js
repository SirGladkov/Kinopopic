import axios from 'axios'
// import Vue from 'vue'
// import Vuex from 'vuex'
import {createStore} from 'vuex';

// Vue.use(Vuex);

const getTopFilms = createStore({
    state:{
        films:[]
    },
    mutations:{
        SET_FILMS_TO_STATE:(state, films) => {
            state.films = films;
        }
    },
    actions:{
        GET_FILMS_FROM_API({commit}){
            return axios('https://imdb-top-100-movies.p.rapidapi.com/',{
                method: "GET"
            }) 
            .then((films) =>{
                commit('SET_FILMS_TO_STATE',films);
                return films;
            }) 
            .catch((error) => {
                console.log(error)
                return error;
            })
        }
    },
    getters:{
        FILMS(state){
            return state.films;
        }
    },
})




// const getTopFilms = () => axios.get( "https://imdb-top-100-movies.p.rapidapi.com/", {headers:{'X-RapidAPI-Key': '6c9f943d3fmsh643d5c2da4fc533p104afejsn59007ba15467',
// 'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'}}).then((res) => res.data ); 

export default getTopFilms