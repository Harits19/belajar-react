var mysql = require('mysql');

var db = mysql.createConnection({
    host: "localhost",
    user: "phpmyadmin",
    password: "007907",
    database: "petani_kopi"
});

module.exports = db;
// db.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
// });