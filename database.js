var mysql = require('mysql2');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'chobits22',
    database: 'nodeapp'
});

conn.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully');
});

module.exports = conn;