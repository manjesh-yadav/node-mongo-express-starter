const Joi = require('joi');

const createUser = Joi.object({
  name: Joi.string().required(),
  surname: Joi.string().required(),
  lob: Joi.string().required(),
  role: Joi.string().valid('ADMIN','MANAGER').required(),
  email: Joi.string().email().required()
});

const login = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().email().required(),
  rememberMe: Joi.boolean().default(false)
});


const forgotPassword = Joi.object({
  email: Joi.string().email().required(),
});

const resetPassword = Joi.object({
  password: Joi.string().min(6).max(30).required(),
  confirmPassword: Joi.any().valid(Joi.ref('password')).required().label('Confirm Password not matched with password'),
  token: Joi.string().required(),
});


module.exports = {
  createUser,
  login,
  resetPassword,
  forgotPassword
};