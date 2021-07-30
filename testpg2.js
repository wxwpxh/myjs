const pg=require('pg')
var conString = "postgres://mymotif:wxwpxh@localhost:5432/mymotif";  //postgres可改为tcp
var client = new pg.Client(conString);
client.connect(function(err) {
    if(err) {
      return console.error('连接postgreSQL数据库失败', err);
    }
    client.query('SELECT * FROM student', function(err, data) {
      if(err) {
        return console.error('查询失败', err);
      }else{
        // console.log('成功',data.rows); 
        console.log('成功',JSON.stringify(data.rows)); 
      }
      client.end();
    });
  });