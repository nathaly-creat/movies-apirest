const axios = require('axios');

const obtenerPeliculas = (req, res) => {
    var config = {
        method: 'get',
        url: 'https://api.themoviedb.org/3/movie/popular?api_key=73b6cef27446579a679780cbd57cd7ea',
        headers: { }
      };
      
      axios(config)
      .then(function (response) {
        res.send(response.data);
      })
      .catch(function (error) {
        res.send({mensaje: 'Ocurrió un Error'});
      });
}

const obtenerPeliculasId = (req, res) => {
    var config = {
        method: 'get',
        url: 'https://api.themoviedb.org/3/movie/'+req.params.id+'?api_key=73b6cef27446579a679780cbd57cd7ea',
        headers: { }
        };
        axios(config)
        .then(function (response) {
          // console.log(response.data);
          res.send(response.data);
        }
        )
        .catch(function (error) {
            res.send({mensaje: 'Ocurrió un Error'});
        }
        );
}


module.exports = {obtenerPeliculas , obtenerPeliculasId};