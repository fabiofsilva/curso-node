var app = require('./config/server');

var rotaHome = require('./app/routes/home')(app);
var rotaNoticias = require('./app/routes/noticias')(app);
var rotaFormAddNoticias = require('./app/routes/form_add_noticia')(app);

app.listen(8000, function(){
	console.log('Servidor rodando com Express');
});