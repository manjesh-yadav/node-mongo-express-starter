const Joi = require('joi');
const validators = require('../validation')

const validate = (schema) => async (req, res, next) => {
  if (!validators.hasOwnProperty(schema)) {
    throw new Error(`'${schema}' validator is not exist`)
  }
  try {
    const validated = await validators[schema].validateAsync(req.body)
    req.body = validated
    next()
  } catch (err) {
    if (err.isJoi) {
      return next(res.status(400).send({ message: err.message }));
    }
    next(res.status(500).send({ message: err.message }))
  }

}

module.exports = validate;