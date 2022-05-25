const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { DateTime } = require('luxon');


const userModel = require("../models/user.model");
const resetPasswordModel = require("../models/resetPassword.model");

const sendMail = require('../utils/mail.utils');
const { replaceArray, nowMysqlFormate } = require('../utils/commonFunction.utils');
const { getRandomKey } = require('../utils/crypto.utils');
const config = require('../config/config');

const login = async (req, res) => {
  try {
    const user = await userModel.getUserByEmail(req.body.email);
    if (!user || user.length == 0 || !bcrypt.compareSync(req.body.password, user[0].password)) {
      throw new Error("Invalid email address or password");
    }

    const payload = {
      userId: user[0].id,
      userType: user[0].role,
      email: user[0].email
    }

    let option = {
      expiresIn: 86400
    }


    if(req.body.rememberMe){
      option = {
        expiresIn: config.jwt.expireIn
      }
    }

    const token = jwt.sign(payload, config.jwt.secret, option);
    delete user[0].password;
    res.send({ error: false, message: "Login Success", token, user: user[0] });

  } catch (error) {
    console.error(error);
    res
      .status(400)
      .send({ error: true, message: error.message, stack: error.stack });
  }
};


const forgotPassword = async (req, res) => {
  try {
    const user = await userModel.getUserByEmail(req.body.email);
    if (!user || user.length == 0) {
      throw new Error("Email address not exist");
    }

    let token = getRandomKey();
    let tokenHex = token.toString('hex');

    await resetPasswordModel.insertResetPasswordToken({
      email: req.body.email,
      token: tokenHex,
      created_at: nowMysqlFormate()
    });

    // let link = config.appUrl+'forgot-password/'+tokenHex;

    // let htmlTemplateMailTemplate = await fs.readFile(
    //   path.join(__dirname,'../mailTemplate/forgotPassword.html'),
    //   "utf8"
    // );

    // htmlTemplateMailTemplate = replaceArray(
    //   htmlTemplateMailTemplate,
    //   [
    //     "{{link}}",
    //   ],
    //   [
    //     [link]
    //   ]
    // );

    // const mail = await sendMail(req.body.email, 'Reset Password', htmlTemplateMailTemplate);

    res.send({ error: false, message: "Password reset link shared on your email address"});

  } catch (error) {
    console.error(error);
    res
      .status(400)
      .send({ error: true, message: error.message, stack: error.stack });
  }
};

const resetPassword = async (req, res) => {
  try {

    const deletePassword  = DateTime.utc().minus({minutes: 10}).toFormat('yyyy-MM-dd HH:mm:ss')
    await resetPasswordModel.deleteOlderToken(deletePassword);

    const token = await resetPasswordModel.checkToken(req.body.token);
    if (!token || token.length == 0) {
      throw new Error("Invalid token");
    }

    const user = await userModel.getUserByEmail(token[0].email);
    if (!user || user.length == 0) {
      throw new Error("Email address not exist");
    }

    
    const updateData = {
        password: bcrypt.hashSync(req.body.password, 10)
     }

    await userModel.updateUserByEmail(updateData, token[0].email);

    res.send({ error: false, message: "Password reset successfully"});

  } catch (error) {
    console.error(error);
    res
      .status(400)
      .send({ error: true, message: error.message, stack: error.stack });
  }
};



module.exports = {
  login,
  forgotPassword,
  resetPassword
};
