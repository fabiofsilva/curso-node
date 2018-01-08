module.exports.index = function(application, request, response) {
	var connection = application.config.dbConnection;
	var noticiasModel = new application.app.models.NoticiasDAO(connection);

	noticiasModel.get5UltimasNoticias(function(error, result){
    	response.render('home/index', {'noticias': result});
	});
}