// Get the packages we need
var express = require('express');

// Criando a aplicação express
var app = express();

// Definir pelas vairaveis de ambiente ou pela porta 3000
var port = process.env.PORT || 3000;

// Criando nosso router express
var router = express.Router();

// Rota inicial para testes
// http://localhost:3000/api
router.get('/', function(req, res){
  res.json({ message: 'Vocë esta com baixo estoque de cervejas!'});
});

// Registras todos nossas rotas com /api
app.use('/api', router);

//Iniciando o Servidor
app.listen(port);
console.log('Inserindo cerveja na Porta ' + port);
