const express = require('express');
const router = express.Router();
const data = require('../bd/books.js')

/* En base a los apuntes de clases de Osman desarrollaremos
los 4 métodos para interactuar con la BD en este modulo router.
Render de la pagina correspondiente también con partials */
router.get('/', function(req, res, next) {
  res.render('pages/index', {
    title: "Colección general libros",
    data: data,
  });
});

router.post('/', function(req, res, next) {
  res.render('pages/index', {
    title: "Colección general libros",
    data: data,
  });
});

router.put('path', (req, res) => {
});('/', function(req, res, next) {
  res.render('pages/index', {
    title: "Colección general libros",
    data: data,
  });
});

router.delete('path', (req, res) => {

});('/', function(req, res, next) {
  res.render('pages/index', {
    title: "Colección general libros",
    data: data,
  });
});


module.exports = router;