const router = require('express').Router();
const userController = require('../controllers/user.controller');
const validate = require('../middlewares/validate')

router
  .route('/')
  .post(validate('createUser'), userController.createUser);

module.exports = router;