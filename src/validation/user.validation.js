const Joi = require('joi');


const createUser = Joi.object({
  name: Joi.string().required(),
  surname: Joi.string().required(),
  lob: Joi.string().required(),
  role: Joi.string().valid('1','2').required(),
  email: Joi.string().email().required()
});


  module.exports = {
    createUser
  };