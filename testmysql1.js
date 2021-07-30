var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'mymotif',
  password : 'wxwpxh',
  database : 'yiibaidb'
});
 
connection.connect();
 
let sql = `SELECT * FROM items`;
connection.query(sql, (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(results);
});
connection.end();