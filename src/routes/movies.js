const { Router } = require('express');
const { obtenerPeliculas, obtenerPeliculasId } = require('../controller/movies');
const router = Router();



//Raiz
router.get('/movie/', obtenerPeliculas);
router.get('/movie/:id', obtenerPeliculasId);

 
module.exports = router;