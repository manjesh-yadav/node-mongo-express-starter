const { dbQuery } = require("../utils/database.utils");


const insertResetPasswordToken = async (data) => {
  await dbQuery("DELETE FROM password_resets WHERE email = ?", [data.email]);
  const [ result ] =  await dbQuery("INSERT INTO password_resets SET ?", [data]);
  return result;
};

const deleteOlderToken = async (time) => {
  await dbQuery("DELETE FROM password_resets WHERE created_at <= ?", [time]);
}

const checkToken = async (token) => {
  const [ result ] =  await dbQuery("SELECT * FROM password_resets where token = ?", [token]);
  return result;
}

module.exports = {
  insertResetPasswordToken,
  checkToken,
  deleteOlderToken
};