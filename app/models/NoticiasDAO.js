function NoticiasDAO(connection){
	this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
	this._connection.query('select * from noticias', callback);		
}

module.exports = function(){
	return NoticiasDAO;
}