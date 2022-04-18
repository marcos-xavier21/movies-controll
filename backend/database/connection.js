const mysql = require('mysql');

const Connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'eniomarcos11',
    database: 'movies-control'
})

module.exports = Connection;