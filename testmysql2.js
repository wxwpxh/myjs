var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'mymotif',
  password : 'wxwpxh',
  database : 'yiibaidb'
});
 
connection.connect();
 
connection.query('SELECT * FROM employees', function (error, results, fields) {
  if (error) throw error;
  console.log('The employeeNumber is: ', results[0].employeeNumber);
});
connection.end();