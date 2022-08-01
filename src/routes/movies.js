const { Router } = require('express');
const { obtenerPeliculas, obtenerPeliculasId } = require('../controller/movies');
const router = Router();



//Raiz
router.get('/', obtenerPeliculas);
router.get('/:id', obtenerPeliculasId);

 
module.exports = router;