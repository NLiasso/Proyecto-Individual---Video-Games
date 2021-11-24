const express = require('express')
const {Genre} = require('../db')
const router = express.Router()
const axios = require('axios').default;
require('dotenv').config();
const {API_KEY} = process.env;
//const { Videogame } = require("../db.js");


router.get('/', async (req, res) => {
    
        try {
            //Primero buscamos datos en la db
            const genresDb = await Genre.findAll();
            if (genresDb.length){
                return res.json(genresDb)
            }

            //le pegamos a la api para obtener los generos
            const response = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
            const genres = response.data.results;
            
            //los guardamos
            genres.forEach(async e => {
                await Genre.findOrCreate({
                    where: {
                        genre_name: e.name,
                        genre_id: e.id,
                        genre_count: e.games_count,
                        //genre_image: e.image
                    }
                })
            })
    
        } catch(error) {
            res.send({error: error})
        }
})

module.exports = router;





    
//     axios
//     .get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
//     .then((response) => {
//         const genres = response.data.results.map((genre) => ({
//             genre_name: genre.name,
//             url_img: genre.image_background,
//         }));
    
//         return Promise.all(
//             genres.map((genres) => Genre.finOrCreate({
//                 where: {genre_name: genres.genre_name},
//                 defaults: {url_img: genres.url.img},
//             })
//         )
//     );
//    })

//     .then(() =>{
//         return Genre.findAll();
//     })

//     .then((response) => {
//         res.json(response)
//     })
//     //.catch((error) => res.status(500).statusMessage(error));
// });


// router.get('/:name', async (req, res, next) => {
    
    
//     try {
   
//     const {name} = req.params.name
//     //findAll where: op.like
//     generoFiltrado = await Genre.findByPk(name)({
    
//     })
//     res.send(generoFiltrado)
  

// }catch(error) {
//     next(error)
// }

// })



