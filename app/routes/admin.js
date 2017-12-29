module.exports = function(application){
	application.get('/formulario-inclusao-noticia', function(request, response){
		application.app.controllers.admin.formulario_inclusao_noticia(application, request, response);
	});	

    application.post('/noticias/salvar', function(request, response){
        application.app.controllers.admin.salvar_noticia(application, request, response);
    });     
}