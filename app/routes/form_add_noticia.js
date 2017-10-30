module.exports = function(app){
	app.get('/formulario-inclusao-noticia', function(request, response){
		response.render('admin/form_add_noticia');
	});	
}