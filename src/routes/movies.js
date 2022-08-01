const { Router } = require('express');
const { obtenerPeliculas } = require('../controller/movies');
const router = Router();



//Raiz
router.get('/', obtenerPeliculas);
router.get('/:id', obtenerPeliculas);

 
module.exports = router;