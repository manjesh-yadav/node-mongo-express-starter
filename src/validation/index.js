const userValidation = require('./user.validation')
const clientValidation = require('./client.validation')

module.exports = {
    ...userValidation,
    ...clientValidation,
}