import axios from 'axios'
export const FETCH_GAMES = 'FETCH_GAMES'
export const SEARCH_GAMES = 'SEARCH_GAMES'
export const SORT_NAME = 'SORTNAMES'
export const SORT_RATING = 'SORTRATING'



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