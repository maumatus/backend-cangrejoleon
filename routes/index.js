const express = require('express');
const router = express.Router();
const data = require('../bd/books.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', {
    title: "Titulo prueba",
    data: data,
  });
  console.log("vemos si nos carga los libros en este scope")
  console.log(data)
});


module.exports = router;