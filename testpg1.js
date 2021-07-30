var pg = require('pg');  
var connection = pg.Pool({
  host     : 'localhost',
  port 	: 5432,
  user     : 'mymotif',
  password : 'wxwpxh',
  database : 'mymotif'
});
 
connection.query('SELECT * FROM student', function (err, results) {
	if (err) throw err;
	console.log('The student name is: ', results.rows[0].sname);
	  
	connection.end();
});
