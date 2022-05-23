let mysql = require('mysql');

module.exports = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "oursitedemo_realfreedom",
  });