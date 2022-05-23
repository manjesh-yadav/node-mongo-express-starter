const userModel = require('../models/user.model');

const registerUser = (async (req, res) => {
    try {
        const createUser = await userModel.createUser();
        console.log(createUser);
        res.send(createUser);
    } catch (error) {
      res.status(400).send({"error": error.message});
    }
  });

module.exports = {
    registerUser
};