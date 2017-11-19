// Arquivo de configuração da aplicação
var result = require('dotenv').config();

if (result.error) {
  throw result.error;
}

var express = require('express');
var consign = require('consign');

var app = express();
// Para usar extensão ejs nos templates, basta descomentar a linha abaixo
// app.set('view engine', 'ejs');
// Para usar extensão html nos templates, basta descomentar as linhas abaixo
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
/* Configura o diretório dos templates html.
   Faz a pesquisa a partir do modulo onde server.js é importado,
   por isso a inclusão de "./".
*/
app.set('views', './app/views');

consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.into(app);

module.exports = app;