var mysql = require('mysql');

module.exports = function(){
	return mysql.createConnection({
		'host': 'localhost',
		'user': 'root',
		'password': 'logica33',
		'database': 'portal_noticias'
	});
}
