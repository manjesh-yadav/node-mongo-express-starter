const bcrypt = require('bcryptjs');

const userModel = require('../models/user.model');

const createUser = (async (req, res) => {
    try {
        const checkUniqueEmail = await userModel.checkUniqueEmail(req.body.email);
        if(checkUniqueEmail[0].count > 0) throw new Error('Email address already exists'); 


        // hash password
        req.body.password = bcrypt.hashSync('Pass@123', 10);
        const createUser = await userModel.createUser(req.body);
        if(createUser.insertId){
          res.send({error: false, message: "User created successfully"});
        } else {
          throw new Error('Something went wrong');
        }

    } catch (error) {
      console.error(error);
      res.status(400).send({error: true, "message": error.message, stack: error.stack});
    }
  });

module.exports = {
    createUser
};