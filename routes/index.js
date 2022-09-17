var express = require('express');
var router = express.Router();
const books = require('../bd/books.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', {
    title: "Titulo prueba",
    data: books
  });
});


module.exports = router;
