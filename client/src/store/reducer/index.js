import { ASCENDENTE } from "../../constantes/sort";
import { FETCH_GAMES, SEARCH_GAMES, SORT} from "../actions";

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

        case SORT:
            let orderedGames = [...state.games]

            orderedGames = orderedGames.sort((a,b)=>{
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
                filteredGames: orderedGames
            }
        
        default:
            return state
    }
}