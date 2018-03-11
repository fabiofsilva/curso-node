// Arquivo de configuração da aplicação
var result = require('dotenv').config();

if (result.error) {
  throw result.error;
}

var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var nunjucks = require('nunjucks');

var app = express();

// Configuração do template engine
nunjucks.configure('./app/views', {
    autoescape: true,
    express: app
});

// Extensão default do template engine
app.set('view engine', 'html');

// Inclusão de middlewares
app.use(express.static('./app/public'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
    .then('app/controllers')
	.into(app);

// middleware que configura páginas de status
app.use(function(request, response, next){
	response.status(404).render('erros/404');
	// Continua o processo
	next();
});

// middleware que configura páginas de erro
app.use(function(erro, request, response, next){
	response.status(500).render('erros/500');
	console.log(erro);
	// Continua o processo
	next();
});

module.exports = app;