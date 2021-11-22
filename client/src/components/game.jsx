import { Link } from "react-router-dom";
import styles from './game.css'

export default function Game({name, image, genres, id}){
    //console.log(genres)
    return <div className={styles.cards} > 
        <Link to={`/${id}`}>
            <h2> {name} </h2>
        </Link>
            <img src={image} style={{width: '20vw'}} alt= 'portada de juego'/>
            <h4> {genres.join(", ")} </h4>
            
    </div>
    
}