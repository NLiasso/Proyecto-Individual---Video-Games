const router = require('express').Router();
require("dotenv").config();
const { Videogame } = require("../db.js");
const { Op } = require ("sequelize");
const axios = require('axios');
const {API_KEY} = process.env;



// [ ] GET /videogame/{idVideogame}:
// Obtener el detalle de un videojuego en particular
// Debe traer solo los datos pedidos en la ruta de detalle de videojuego
// Incluir los géneros asociados



router.get('/:id', async (req, res, next) => {  
    //Busqueda por id primero
    // Sugerencia, fijate que haces en videogames
    try {

        const id = req.params.id;
        
        if(id.length > 8) {
            //es mio
          let  videogame = await Videogame.findByPk(
            id,
            { include: GenreGame },
            
          );
         
         let videogameData = videogame.dataValues
         let filterData = {
                 name: videogameData.name,
                 id: videogameData.id,
                 background_image: videogameData.background_image,
                 description: videogameData.description,
                 rating: videogameData.rating,
                 released: videogameData.released,
                 genres: videogameData.genreGames.map((genre) => {
                    return {
                        name: genres.name,
                        id: genre.id,
                    };
                }),
                 platforms: videogameData.platforms
                
             }
         
         
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



module.exports = router;