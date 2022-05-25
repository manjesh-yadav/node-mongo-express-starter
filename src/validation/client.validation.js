const Joi = require('joi');

const createClient = Joi.object({
  name: Joi.string().required(),
  category: Joi.number().required(),
  brands: Joi.array().items(Joi.string())
});



module.exports = {
  createClient
};