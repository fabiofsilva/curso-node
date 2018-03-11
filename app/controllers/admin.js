module.exports.formulario_inclusao_noticia = function(application, request, response) {
    response.render('admin/form_add_noticia');
}

module.exports.salvar_noticia = function(application, request, response) {
    var noticia = request.body;
    
    request.assert('titulo', 'Título é obrigatório').notEmpty();
    request.assert('resumo', 'Resumo é obrigatório').notEmpty();
    request.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
    request.assert('autor', 'Autor é obrigatório').notEmpty();
    request.assert('data_noticia', 'Data é obrigatória').notEmpty().isDate({format: 'YYYY-DD-MM'});
    request.assert('noticia', 'Notícia é obrigatória').notEmpty();

    var erros = request.validationErrors();

    if (erros){
        response.render('admin/form_add_noticia', {'validacao': erros, 'noticia': noticia});
        return;
    }
    
    var connection = application.config.dbConnection;
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function(error, result){
        response.redirect('/noticias');
    });    
}