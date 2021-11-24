import { Link } from "react-router-dom";
import '../App.css';

export default function Game({name, image, genres, id}){
    //console.log(genres)
    return <div className='cartasIndividuales'>
                <Link to={`/${id}`}>
                    <div className='divTitulos'>
                        {name}
                    </div>
                </Link>
                <img src={image} style={{width: '10vw'}} alt= 'portada de juego'/>
                <div className='divGenres'>
                    {genres.join(", ")}
                </div>
            </div>
}