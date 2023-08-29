const mysql = require('mysql');
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'sudo',
  password: '4qPoeKw[-!8/QHs0',
  database: 'dupukku',
  flags: '-FOUND_ROWS,IGNORE_SPACE'
});
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected!');
});
module.exports = conn;