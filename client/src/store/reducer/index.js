import { ASCENDENTE } from "../../constantes/sort";
import { FETCH_GAMES, SEARCH_GAMES, SORT_NAME, SORT_RATING} from "../actions";

const initialState = {
    games: [],
    filteredGames: []
}

export default function reducer(state = initialState, action){
    switch (action.type){

        case FETCH_GAMES:
            return{
                ...state,
                games: action.payload,
                filteredGames: action.payload
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