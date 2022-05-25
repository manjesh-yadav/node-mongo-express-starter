const { dbQuery } = require("../utils/database.utils");

const checkUniqueEmail = async (email, id) => {
  let query = "SELECT COUNT(id) as count FROM users where email = ?";
  if(id){
    query += " id = ?"
  }
  const [ result ] =  await dbQuery(query, [email, id]);
  return result;
}


const createUser = async (body) => {
  const [ user ] = await dbQuery("INSERT INTO users SET ?", body);
  return user
};

const getUserByEmail = async (email) => {
  const [ result ] =  await dbQuery("SELECT * FROM users where email = ?", [email]);
  return result;
};

const updateUserById = async (update, id) => {
  const [ result ] =  await dbQuery("UPDATE users SET ? where id = ?", [update, id]);
  return result;
}

const updateUserByEmail = async (update, email) => {
  const [ result ] =  await dbQuery("UPDATE users SET ? where email = ?", [update, email]);
  return result;
}



module.exports = {
  createUser,
  checkUniqueEmail,
  getUserByEmail,
  updateUserById,
  updateUserByEmail
};