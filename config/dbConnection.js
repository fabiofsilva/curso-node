var mysql = require('mysql');

var pool = mysql.createPool({
		'host': process.env.DB_HOST,
		'user': process.env.DB_USER,
		'password': process.env.DB_PASSWORD,
		'database': process.env.DB_NAME,
		'connectionLimit': process.env.DB_CONN_LIMIT
	});

pool.on('acquire', function (connection) {
  console.log('Connection %d acquired', connection.threadId);
});

pool.on('connection', function (connection) {
  console.log('conexao estabelecida');
});

pool.on('release', function (connection) {
  console.log('Connection %d released', connection.threadId);
});

module.exports = pool;
