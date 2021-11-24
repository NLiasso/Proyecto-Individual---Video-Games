import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router"
import parse from 'html-react-parser'
import { Link } from "react-router-dom"
import '../App.css'



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
        return <div > 

            {
        
                game ?
                <>
                <div className='detalleDeJuego'>
                    <div className='divTitulos'>
                        {game.name}
                    </div>
                    <div>
                        <img src={game.background_image} style={{width: '20vw'}} alt= 'portada de juego' /> 
                    </div>
                    <div className='divGenres'>
                        Generos: {game.genres.map(g => g.name).join(", ")}
                    </div>
                    <div className='descriptionGame'>
                        Descripción del Juego: <br />
                        {parse(game.description)}
                    </div>
                    <div className='lanzamientoGame'>
                        Fecha de lanzamiento: {game.released}
                    </div>
                    <div className='lanzamientoGame'>
                        Rating: {game.rating} 
                    </div>
                    <div className='lanzamientoGame'>
                        Plataformas compatibles: {game.platforms.join(", ")}
                    </div>
                </div>
                </> :
                <div className='botonCargando'>   </div>
        }
                </div>
}

