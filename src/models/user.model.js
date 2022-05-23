const { dbQuery } = require("../utils/database")

const createUser = async (body) => {
  delete body.surname;
  const user = await dbQuery("INSERT INTO users SET ?", body);
  return user
};

module.exports = {
  createUser,
};
