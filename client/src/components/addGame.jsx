import axios from "axios"
import { useState, useEffect} from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchGame, getGenres, postGame } from '../store/actions/index';
import './addgame.css'



export default function AddGame(){
    const dispatch = useDispatch()
    const genres = useSelector((state) => state.genres)
    const history = useHistory()
    

    const [input, setInput] = useState({
        name: "",
        description:"",
        platforms:[],
        background_image:"",
        released:"",
        rating:"",
        genres:[],
        genrename:[]

    }) // controlar plataformas y generos!!! 
    const [errors, setErrors] = useState({})

    useEffect (() => {
        dispatch(getGenres())
    },[])
    function handleDelete(el){
        setInput({
            ...input,
            genres: input.genres.filter( occ => occ !== el)
        })
    }
    function handleDeletePlat(el){
        setInput({
            ...input,
            platforms: input.platforms.filter( occ => occ !== el)
        })
    }

        function validate (input){
            let errors = {};
          if(!input.name) {
              errors.name = "  Require Name"
          }
          else if (!input.description){
              errors.description = "Require Description"
          }
          else if(input.rating < 0 || input.rating > 5)
          errors.rating = "  Rating from 0 to 5 "
          else if (!input.platforms){
            errors.platforms = "  Require at least one platform"
        }
        else if (!input.genres){
            errors.genres = "  Require at least one genre"
        }

          return errors
            
        }

        function  handleChange(e){
            setInput({
                ...input,
                [e.target.name]: e.target.value

            })
            setErrors(validate({
                ...input,
                [e.target.name]: e.target.value
            }))

        }
        function handleSelection(e){
            const {options, selectedIndex} = e.target
           // console.log(options[selectedIndex].text)
           input["genrename"].push(options[selectedIndex].text)
           
           setInput({
                ...input,
                genres : [...input.genres, parseInt(e.target.value)]
            })
           setErrors(validate({
                ...input,
                [e.target.name]: e.target.value
            }))
        
        }
        function handleSelectionP(e){
            setInput({
                
                ...input,
                platforms : [...input.platforms, e.target.value]
            })
            setErrors(validate({
                ...input,
                [e.target.name]: e.target.value
            }))

        }
     

        function handleSubmit(e){
            e.preventDefault()

            
            dispatch(postGame(input))
            

            alert("Videogame created")
            setInput({
                name: "",
                description:"",
                platforms:[],
                background_image:"",
                released:"",
                rating:"",
                genres:[]
            })
        dispatch(fetchGame())
          history.push("/home")          
        
    }
        
    return(
        <div >
            <div >
            <Link to="/home"><button>HOME</button></Link>
            <h1 >Crea tu videojuego!</h1>
            <form  onSubmit={(e)=>handleSubmit(e)} className='formulario'>
                <div>
                    <label>Name:</label>
                        <input 
                        type="text" 
                        value={input.name}
                        name="name"
                        onChange={(e)=>handleChange(e)}
                        required
                        />{errors.name && (<p>{errors.name}</p>)}
                </div>
                <div >
                    <label>Description:</label>
                        <textarea
                        row="10"
                        cols="50" 
                        type="textarea" 
                        value={input.description}
                        name="description" 
                        onChange={(e)=>handleChange(e)}
                        required
                        />
                        {errors.description && (
                            <p>{errors.description}</p>
                        )}
                </div>
                <div >
                    <label>Image:</label>
                    <input 
                    type="text"
                    value={input.background_image}
                    name="background_image" 
                    onChange={(e)=>handleChange(e)}
                    required
                    />
                </div>
                <div >
                    <label>Rating:</label>
                    <input 
                    type="number"
                    value={input.rating}
                    name="rating"
                    step={0.1} 
                    min={0.1}
                    max={5}
                    onChange={(e)=>handleChange(e)}
                    required
                    />  {errors.rating && (
                        <p>{errors.rating}</p>
                    )}
                </div>
                <div  >
                    <label>Released</label>
                    <input
                    type="date"
                    name="released"
                    value={input.released}
                    onChange={(e)=>handleChange(e)}
                    required
                    />
                </div>
                <div >
                <div >
                    <label>Platforms:
                        <select multiple onChange={(e) => handleSelectionP(e)} required>
                            <option value="PS5">PS5</option>
                            <option value="PS4">PS4</option>
                            <option value="PS3">PS3</option>
                            <option value="Xbox S/X">Xbox S/X</option>
                            <option value="Xbox One">Xbox One</option>
                            <option value="Xbox 360">Xbox 360</option>
                            <option value="Nintendo">Nintendo</option>
                            <option value="Wii">WII</option>
                        </select>
                    </label>
                    
                </div>
                <div>
                    <label>Genres:
                    <select multiple onChange={(e)=>handleSelection(e)} required>
                        {
                           genres?.map((el =>{
                            return(
                                <option genrename={el.genre_name} value={el.id}> {el.genre_name} </option>
                            )
                            }))
                        }
                    </select>
                    </label>
                </div>
                </div>
                <button type="submit" >Create</button>
                
            <div  >
                <div >
                <h4>platforms selected:</h4>
            {
                input.platforms.map(el =>
                    <div >
                        <p>{el}</p>
                        <button onClick={(e)=> handleDeletePlat(el)} >X</button>
                        </div>)
            }
            </div>
            <div >
                <h4>Genres selected:</h4>
            {
            input.genrename.map(el => 
                <div>
                    <p>{el}</p>
                    <button onClick={(e)=> handleDelete(el)} id="but123" >x</button>
                </div>)
            }
            </div>
                </div>
                
            </form>
        </div>
        
        </div>
    
    )


            
}



/*
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
*/