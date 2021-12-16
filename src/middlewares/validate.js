const Joi = require('joi');
const httpStatus = require('http-status');

const validators = require('../validation')

const validate = (schema) => async (req, res, next) => {
  //! If validator is not exist, throw err
  if (!validators.hasOwnProperty(schema)) {
    throw new Error(`'${schema}' validator is not exist`)
  }
  try {
    const validated = await validators[schema].validateAsync(req.body)
    req.body = validated
    next()
  } catch (err) {
    //* Pass err to next
    //! If validation error occurs call next with HTTP 422. Otherwise HTTP 500
    if (err.isJoi) {
      return next(res.status(httpStatus.BAD_REQUEST).send({ message: err.message }));
    }
    next(res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ message: err.message }))
  }

}

module.exports = validate;