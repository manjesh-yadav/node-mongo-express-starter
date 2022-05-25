const mysql = require('mysql');
const config = require('./config');

const DB  = mysql.createPool({
  connectionLimit : 10,
  host            : config.mySQL.host,
  user            : config.mySQL.user,
  password        : config.mySQL.password,
  database        : config.mySQL.database,
  dateStrings     : true
});

module.exports = DB;