import {createStore} from "vuex";
import axios from "axios";


export const store = createStore({
    state(){
        return {
            films:[],
        }
    },
    mutations:{
        SET_FILMS_TO_STATE:(state, films) => {
            state.films = films;
        }
    },
    actions:{
        GET_FILMS_FROM_API({commit}){
            return axios.get( "https://imdb-top-100-movies.p.rapidapi.com/", {headers:{'X-RapidAPI-Key': '6c9f943d3fmsh643d5c2da4fc533p104afejsn59007ba15467', 'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'}})
            .then((res) => commit('SET_FILMS_TO_STATE',res.data))
            .catch((error) => {
                console.log(error)
                return error;
            })
        }
    },
    getters:{
        films(state){
            return state.films;
        }
    },
})




// const getTopFilms = () => axios.get( "https://imdb-top-100-movies.p.rapidapi.com/", {headers:{'X-RapidAPI-Key': '6c9f943d3fmsh643d5c2da4fc533p104afejsn59007ba15467',
// 'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'}}).then((res) => res.data );

