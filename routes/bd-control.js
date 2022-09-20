/* Agregaremos el */
const express = require('express');
const router = express.Router();
const data = require('../bd/books.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', {
    title: "Colección general libros",
    data: data,
  });
  console.log("vemos si nos carga los libros en este scope")
  console.log(data)
});
/*
router.post('/', function(req, res, next) {
    res.post
})
Revisar apuntes Bootcamp, ahi estaban las funciones para peticiones
a la BD con los 4 metdodos CRUD para la base de datos principal de 
colección completa
*/


module.exports = router;