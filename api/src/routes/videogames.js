require("dotenv").config();
const { Videogame, Genre } = require("../db.js");
const router = require('express').Router();
const { Op } = require ("sequelize");
const axios = require('axios');
const db = require("../db.js");
const {API_KEY} = process.env;


// Vamos a trabajar en una sola función, para mayor comodidad (por ahora).
router.get('/', async (req, res, next) => {   

    let name = req.query.name
    // Si se pide query, busco por nombre. Pero solo en caso de por nombre. Es mejor preguntar esto primero.
    if(name) {
        let gamesApi = axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`)
        let gamesDb = await Videogame.findAll({
            where: {
                    name:{
                        [Op.iLike]: "%" + name + "%" 
                    }
            },
            include: Genre,
            limit: 15,
        })
        Promise.all([
            gamesApi, 
            gamesDb,
        ])
        
        .then((response => {
            const [resFromApi,resFromDb]= response
            data = [resFromDb,resFromApi.results]
            let resFromDb1 = resFromDb
            const filterFromDb = resFromDb1.map((e) => {                         
                return {
                    id: e.id,
                    name: e.name,
                    description: e.description,
                    releaseDate: e.released,
                    rating: parseFloat(e.rating),
                    platforms: e.platform,
                    background_image: e.background_image,  //Imagen para el front, no borrar
                    genres: e.genreGames.map((game) => {
                       return game.name
                    }),
                    createdInDb: e.createdInDb || true   //Forzamos el creado en db a true. Revisar esto
            };
            })
           
           let respuesta = resFromApi.data.results   // de la api? o db?
          
         let resp = respuesta.map((e) => {
            return { //saco los valores que no quiero enviar
                id: e.id,
                name: e.name,
                background_image: e.background_image,
                rating: e.rating,
                release: e.released,
                description: e.description,
                genres: e.genres.map((genres) => {return  genres.name}),
                platforms: e.platforms.map(
                    (el) => el.platform.name
                ),
            };
           })
          
          
        res.send([...filterFromDb,...resp])
        }))
        
        
        //Desde aqui buscamos todo, ya que no habia nombre en el query 
        //NOTA: Mientras no tengas juegos en tu DB, vas a ver un arreglo vacio antes de los juegos de tu API
        // Si esta vacia, ternario o shift, soluciona eso
    } else {
        // Voy a priorizar la DB a la API, porque la api es infinita...
        //SUGERENCIA: Establecer manera de identificar vino de api o de DB
        gamesDb = await Videogame.findAll({
            include: {
                model: Genre,
                attibutes: ['genre_id', 'genre_name', 'id']
            }
        })
           
        let juegosDeApiPages = []

       let page1 = (await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)).data;
       let page2 = (await axios.get(page1.next)).data;
       let page3 = (await axios.get(page2.next)).data;
       let page4 = (await axios.get(page3.next)).data;
       let page5 = (await axios.get(page4.next)).data;
 
    

    Promise.all([
        page1,page2,page3,page4,page5,gamesDb
    ])
    .then((respuesta) => {
       
        const [
             page1,
             page2,
             page3,
             page4,
             page5,
             gameDb
        ] = respuesta
         
        juegosDeApiPages= [...page1.results,...page2.results,...page3.results,...page4.results,...page5.results]
        
        
        const filterFromDb = gameDb
        const filtDb = filterFromDb.map((dB) => {
        
        
            //----------Este return es de mi DB, ojo
        
            return {
                id: dB.id,
                name: dB.name,
                description: dB.description,
                releaseDate: dB.released,
                rating: dB.rating,
                platforms: dB.platforms,
                genres: dB.genres.map((genres) => {
                    return ([genres.genre_name] // hay que definir con cual nos quedamos despues //genres.id
                    )}), 
                background_image: dB.background_image,  //Esto va a servir para el front, no tocar
                createdInDb: dB.createdInDb || true     // de esta manera lo vamos a identificar - REVISAR CONEXION CON CODIGO MADRE
       };
        })
       
        let filterFromApi = juegosDeApiPages.map((fak) => {
            //Este return es de mi API
            // Revisar que pasa con el Description en el return general, no lo trae
            return {
                id: fak.id,
                name: fak.name,
                description: fak.description,
                releaseDate: fak.released,
                rating: fak.rating,
                platforms: fak.platforms.map((fakBis) => fakBis.platform.name),
                background_image: fak.background_image,
                genres: fak.genres.map((genres) => {
                    return ([genres.name] // hay que definir con cual nos quedamos despues // genres.id
                    )}), 
            };
        })
        
        let allVideogames = [...filtDb, ...filterFromApi]

        res.send(allVideogames).status(200)
    })

    .catch(error => next(error))

    }
})





  module.exports = router;