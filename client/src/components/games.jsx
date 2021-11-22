import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {fetchGames} from '../store/actions'
import Game from "./game"



export default function Games (){
    let games = useSelector((state) => state.filteredGames)
    
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchGames())
    }, [])
    //console.log(games)
    return <div className='divGames'>
            {games.map((game)=>{
              return <Game id= {game.id} name={game.name} image={game.background_image} key={game.id} genres={game.genres}/>
            })}
        </div>
}