// Carregar os pacotes necessarios
var mongoose = require('mongoose');

//Definindo nosso Beer schema
var Beerschema = new mongoose.Schema({
  name: String,
  type: String,
  quantity: Number
});

//export o mongoose model
module.exports = mongoose.model('Beer', BeerSchema);
