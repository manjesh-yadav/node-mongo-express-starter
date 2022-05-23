const DB = require("../config/database.connection");

const dbQuery = async (query, values) => {
    if(!values){
        values = null;
    }
    return new Promise((resolve, reject) => {
      DB.query(query, values, function (error, results, fields) {
        if (error) reject(error);
        resolve([results, fields]);
      });
    });
};

module.exports = {
    dbQuery
}