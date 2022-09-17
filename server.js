const app = require('./app');
app.set('view engine', 'ejs');
const bodyParser = require('body-parser');
const PORT = 3000;
const books = require('./bd/books.js');


app.use ( bodyParser.json() );
  app.use(bodyParser.urlencoded({
    extended: true
}));


app.listen(PORT, (req, res) => {
  console.log(`ejecutando servidor en http://localhost:${PORT}`)
})