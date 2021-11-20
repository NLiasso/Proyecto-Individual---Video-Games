import { Link } from "react-router-dom";

export default function Game({name, image, genres, id, description}){
    return <div> 
        <Link to={`/${id}`}>
            <h2> {name} </h2>
        </Link>
            <img src={image} style={{width: '20vw'}} alt= 'portada de juego'/>
            <h4> {genres} </h4>
    </div>
}