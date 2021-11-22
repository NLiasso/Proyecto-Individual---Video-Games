import { ASCENDENTE, GET_GENRES } from "../../constantes/sort";
import { FETCH_GAMES,
     SEARCH_GAMES,
     SORT_NAME,
     SORT_RATING,
     FILTER_BY} from "../actions/index.js";

const initialState = {
    games: [],
    filteredGames: [],
    genres: [],
}

export default function reducer(state = initialState, action){
    switch (action.type){

        case FETCH_GAMES:
            return{
                ...state,
                games: action.payload,
                filteredGames: action.payload,
            }

        case GET_GENRES:
                return{
                    ...state,
                    genres: action.payload,
                    
                }    

        case SEARCH_GAMES:
            return{
                ...state,
                filteredGames: action.payload
            }

        case SORT_NAME:
            let orderedGamesName = [...state.games]

            orderedGamesName = orderedGamesName.sort((a,b)=>{
                if (a.name < b.name){
                    return action.payload === ASCENDENTE? -1: 1;
                }
                if (a.name > b.name){
                    return action.payload === ASCENDENTE? 1: -1;
                }
                return 0
            })
            return{
                ...state,
                filteredGames: orderedGamesName
            }

            case FILTER_BY:
                    if (action.payload === 'default'){
                        return {...state, filteredGames: state.games}
                        }
                    if(action.payload === 'DB'){
                        return {...state, filteredGames: state.games.filter((game)=> (typeof game.id) === 'string')}
                        }
                    if(action.payload === 'API'){
                        return {...state, filteredGames: state.games.filter((game)=> (typeof game.id) === 'number')}
                        }
                    else {
                        //console.log(action.payload)
                        return {...state, filteredGames: state.games.filter((game) => {
                            return game.genres.find((genre) => {
                                //console.log(genre[0])
                                return genre[0] === action.payload
                            })
                        })}
                    };


        case SORT_RATING:
            let orderedGamesRating = [...state.games]
    
            orderedGamesRating = orderedGamesRating.sort((a,b)=>{
                if (a.rating < b.rating){
                    return action.payload === ASCENDENTE? -1: 1;
                }
                if (a.rating > b.rating){
                    return action.payload === ASCENDENTE? 1: -1;
                }
                    return 0
            })
                return{
                    ...state,
                    filteredGames: orderedGamesRating
                }
        
        default:
            return state
    }
}