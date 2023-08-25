const mysql = require('mysql');
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test',
  flags: '-FOUND_ROWS,IGNORE_SPACE'
});
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected!');
});
module.exports = conn;