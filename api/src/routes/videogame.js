const router = require('express').Router();
require("dotenv").config();
const { Videogame, Genre } = require("../db.js");
const axios = require('axios');
const {API_KEY} = process.env;
const { v4: uuidv4 } = require('uuid');
const { Op } = require ("sequelize");



// [ ] GET /videogame/{idVideogame}:
// Obtener el detalle de un videojuego en particular
// Debe traer solo los datos pedidos en la ruta de detalle de videojuego
// Incluir los géneros asociados



router.get('/:id', async (req, res, next) => {  
    //Busqueda por id primero
    // Sugerencia, fijate que haces en videogames
    try {

        const id = req.params.id;
   //     console.log(id)
        //type oF !integrer = mio.... convertir el id a entero, si me da error entonces es mio.  Number(id)    o ParseInt
        if(id.length > 8) {
            //es mio
            let  videogame = await Videogame.findByPk(
                id,
                { include: Genre },
            );
            //console.log(videogame.id)
         
            let filterData = {
                name: videogame.name,
                id: videogame.id,
                background_image: videogame.image,
                description: videogame.description,
                rating: videogame.rating,
                released: videogame.released,
                genres: videogame.genres.map((genre) => {
                    return {
                        name: genre.genre_name,
                        id: genre.id,
                    };
                }),
                platforms: videogame.platforms
            }
            //console.log(filterData)
            //console.log(videogame.id)
            
            return res.send(filterData)

        } else {
            //es de la api
            const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`) 

            let  gameData = response.data
            
            let juego = {
                id: gameData.id,
                name: gameData.name,
                background_image: gameData.background_image,
                rating: gameData.rating,
                description: gameData.description,
                released: gameData.released,
                platforms: gameData.platforms.map((disp) => disp.platform.name),
                genres: gameData.genres.map((genres) => {
                    return {
                        name: genres.name,
                        id: genres.id,
                    };
                }),
            };

            return res.send(juego)
        }

        
    } catch(error) {
        next({error: "Error, el numero no existe"})
    }
})



router.post('/', async (req, res, next) =>{
    const {
        name, 
        description, 
        platforms, 
        image, 
        released, 
        rating, 
        genre
      } = req.body;


    try{ 
        // const genreDB = await Genre.findAll({ 
        //     where: {name: genre},
        // })
        // if(genreDB.length !== genre.length){
        //     return res.json({error: 'Genero no encontrado'})
        //}
        
            const videoGameCreate = await Videogame.create({ 
            id: uuidv4(),
            name,
            description,
            release_date: released,
            image,
            rating,
            platforms,
        })

        videoGameCreate.addGenre(genre)
        res.send('Juego Creado')

    }catch(error){
        res.status(400).json({message: error})
    }

})



module.exports = router;