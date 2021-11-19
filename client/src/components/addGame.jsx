import axios from "axios"
import { useState } from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"

export default function AddGame(){

    const [game, setGame] = useState({})
    let history = useHistory()
    function onInputChange(e){
        e.preventDefault()
        setGame ({
            ...game,
            [e.target.name]: e.target.value
        })
    }

    function onSubmit(e){
        e.preventDefault()
        axios.post('http://localhost:3001/videgame/' + game)
        .then(()=>{
            history.push('/')
        })
    }

    return   (
    
    <><div>
            <Link to='/home'>
                Volver al inicio
            </Link>
        </div><div>
                <form onSubmit={onSubmit}>
                    <label htmlFor=''> Nombre: </label>
                    <input onChange={onInputChange} name='name' type='text' value={game.name} />
                    <label htmlFor=''> Imagen: </label>
                    <input onChange={onInputChange} name='image' type='text' value={game.image} />
                    <input type='submit' />
                </form>
            </div></>
    )
            
}