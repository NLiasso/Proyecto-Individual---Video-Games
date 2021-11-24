const { Router } = require('express');
require('dotenv').config();
const videogames = require ('./videogames')
const videogame = require ('./videogame')
const genres = require ('./genres')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogame', videogame)
router.use('/videogames', videogames)
router.use('/genres', genres)


module.exports = router;
