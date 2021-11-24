import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {fetchGames} from '../store/actions'
import Game from "./game"
import Paginado from "./paginado"



export default function Games (){
  
  let games = useSelector((state) => state.filteredGames)

  const [page, setPage] = useState(0)
  const [pages, setPages] = useState(paginado(games))
  function paginado(juegos){
    let arrGames = []
    while(games.length>0){
      arrGames.push(juegos.slice(0,15))
      juegos = juegos.slice(15, juegos.length-1)
      if(juegos.length<=15){
        arrGames.push(juegos)
        break
      }
    }
    return arrGames
  }

    useEffect(()=>{
      setPages(paginado(games))
    },[games])


    let dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchGames())
    }, [])
    
    return <div className='divGames'>
              {pages.length && pages[page].map((game)=>{
                return <Game id= {game.id} name={game.name} image={game.background_image} key={game.id} genres={game.genres}/>
              })}
              <br></br>
              <div>{pages.length && <Paginado
                page={page}
                setPage={setPage}
                pages={pages}
                />}
              </div>
            </div>
}