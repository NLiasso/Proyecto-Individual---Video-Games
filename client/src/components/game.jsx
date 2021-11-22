import { Link } from "react-router-dom";
import styles from './game.css'

export default function Game({name, image, genres, id}){
    //console.log(genres)
    return <div className='cartasIndividuales'> 
        <Link to={`/${id}`}>
            <h2 className='textoDeCartas'> {name} </h2>
        </Link>
            <img src={image} style={{width: '10vw'}} alt= 'portada de juego' />
            <h5> {genres.join(", ")} </h5>
            
    </div>
    
}