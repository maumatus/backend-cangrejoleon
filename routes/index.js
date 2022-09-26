const express = require('express');
const router = express.Router();
const data = require('../bd/books.js');//Datos de BD temporales hasta construirla

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index.ejs', {
    title: "Colección general libros",
    data: data,
  });
});


module.exports = router;