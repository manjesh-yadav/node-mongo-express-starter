const { dbQuery } = require("../utils/database.utils");

const createClient = async (body) => {
  const [ result ] = await dbQuery("INSERT INTO clients SET ?", body);
  return result
};

const updateClient = async (update, id) => {
  const [ result ] = await dbQuery("UPDATE clients SET ? where id = ?", [update, id]);
  return result
};

const deleteClient = async (id) => {
  const [ result ] = await dbQuery("DELETE FROM clients where id = ?", id);
  return result
};

const getClient = async (id) => {
  let query = 'SELECT * FROM clients';
  if(id){
    query += ' where id = ?'
  }
  const [ result ] = await dbQuery(query, id);
  return result
};

module.exports = {
  createClient,
  updateClient,
  deleteClient,
  getClient
};