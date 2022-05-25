const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const validate = require('../middlewares/validate');


router.post('/login', validate('login'), authController.login);

router.post('/forgot-password', validate('forgotPassword'), authController.forgotPassword );
router.post('/reset-password', validate('resetPassword'), authController.resetPassword );

module.exports = router;