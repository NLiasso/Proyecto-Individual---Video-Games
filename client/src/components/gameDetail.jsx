import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router"

export default function GameDetail(){

    const [game, setGame] = useState(null)
    let {id} = useParams ()
    useEffect(()=>{
        axios.get('http://localhost:3001/videogame/' + id)
        .then((response)=>{
            setGame(response.data)
        })
        return () =>{
            setGame(null)
        } // clean up
    }, [])
        return <div> 
        {
            game ?
            <>
            <h2> {game.name} </h2>
            <h4> {game.description} </h4>
            <h4> Id del Juego: {id} </h4>
            <img src={game.image} style={{width: '20vw'}} alt= 'portada de juego' /> 
            <h4 genres={game.genres} />
            </> :
            <div> cargando </div>
        }
    </div>
}