var express = require('express');
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var port = 3000;

app.set('view engine', 'ejs')    // Setamos que nossa engine será o ejs
app.use(expressLayouts)          // Definimos que vamos utilizar o express-ejs-layouts na nossa aplicação
app.use(bodyParser.urlencoded()) // Com essa configuração, vamos conseguir parsear o corpo das requisições

app.get('/', (req, res) => {
    res.render('pages/home')
  })


app.use(express.static(__dirname + '/public'))
app.listen(port)
console.log('Servidor iniciado em http://localhost:' + port)



// Distancia entre dois pontos
// dist = sqrt( pow (x2 - x1, 2) + pow (y2 - y1, 2)); em C