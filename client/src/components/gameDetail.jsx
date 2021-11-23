import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router"
import parse from 'html-react-parser'
import { Link } from "react-router-dom"


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
        return <div className='detalleDeJuego'> 
                <Link to='/home'>
            <button>To Home</button>
            </Link>
        {
        
            game ?
            <>
            <h2> {game.name} </h2>
            <img src={game.background_image} style={{width: '20vw'}} alt= 'portada de juego' /> 
            <h4> Generos: {game.genres.map(g => g.name).join(", ")} </h4>
            <h4> Descripción del Juego: <br />
                 {parse(game.description)} </h4>
            <h4> Fecha de lanzamiento: {game.released} </h4>
            <h4> Rating: {game.rating} </h4>
            <h4> Plataformas compatibles: {game.platforms.join(", ")} </h4>
            </> :
            <div> cargando </div>
        }
    </div>
}


/*
[X] Los campos mostrados en la ruta principal para cada videojuegos (imagen, nombre, y géneros)
[X] Descripción
[X] Fecha de lanzamiento
[X] Rating
[X] Plataformas


*/