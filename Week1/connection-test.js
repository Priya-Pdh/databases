var mysql      = require('mysql2');
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'Databases.123',
  database : 'my_schema'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();
