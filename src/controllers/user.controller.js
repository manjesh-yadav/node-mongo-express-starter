const userModel = require('../models/user.model');

const createUser = (async (req, res) => {
    try {
        const createUser = await userModel.createUser(req.body);
        res.send(createUser);
    } catch (error) {
      res.status(400).send({"error": error.message});
    }
  });

module.exports = {
    createUser
};