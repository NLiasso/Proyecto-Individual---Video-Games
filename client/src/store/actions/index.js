import axios from 'axios'
import {GET_GENRES,
    ORDER_BY,
    } from "../../constantes/sort";
export const FETCH_VIDEOGAME = 'FETCH_VIDEOGAME'
export const FETCH_GAMES = 'FETCH_GAMES'
export const SEARCH_GAMES = 'SEARCH_GAMES'
export const SORT_NAME = 'SORTNAMES'
export const SORT_RATING = 'SORTRATING'
export const GENRES_URL = 'http://localhost:3001/genres';
export const postSubmit = "CREAR_JUEGOS";
export const FILTER_BY = 'FILTER_BY';




export function fetchGames(){
    return function(dispatch){
        axios.get('http://localhost:3001/videogames')
        .then((games)=>{
            dispatch({
                type: FETCH_GAMES,
                payload: games.data
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}

export function fetchGame() {
    return function(dispatch) {
        axios.get('http://localhost:3001/videogame')
        .then((games) => {
            dispatch({
                type:FETCH_VIDEOGAME,
                payload: games
            })
        })
    }
}

export function getGenres() {
    return async function (dispatch) {
      try {
        return axios.get(GENRES_URL).then((response) => {
          dispatch({
            type: GET_GENRES,
            payload: response.data,
          });
        });
      } catch (error) {
        console.log("Es un error", error);
      }
    };
  }


  export function postGame(datos){
    let url = `http://localhost:3001/videogame`;
    return async (dispatch) => {
        return await axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify(datos),
            url: url,
        }).then(({data}) => {
            dispatch({ type: postSubmit, payload: data });
        }).catch(error => {
            throw (error);
        });
    };
}

export function searchGames(search){
    return function(dispatch){
        axios.get('http://localhost:3001/videogames?name=' + search)
        .then((games)=>{
            dispatch({
                type: SEARCH_GAMES,
                payload: games.data
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}

export function sortByName(order){
    return {
        type: SORT_NAME,
        payload: order
    }
}

export function sortByRating(order){
    return {
        type: SORT_RATING,
        payload: order
    }
}

export function filterBy(order) {
    return function (dispatch) {
        dispatch({
          type: FILTER_BY,
          payload: order
        });
    };
  }

  export function orderBy(order) {
    return function (dispatch) {
      dispatch({ type: ORDER_BY, payload: order });
    };
  }
  


  
//   export function postGame(datos){
//       console.log(datos)
//     return async function(){
//         let postgame = await axios.post('http://localhost:3001/videogame', datos)
//         //console.log(postgame.data)
//         return {
//             type: postSubmit,
//             postgame: postgame.data
//         }
//     }
// }