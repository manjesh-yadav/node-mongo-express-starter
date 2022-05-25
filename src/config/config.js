require('dotenv').config()

module.exports = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    appUrl: process.env.APP_URL,
    mySQL: {
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
    },
    jwt: {
      expireIn: process.env.JWT_EXPIRE,
      secret: process.env.JWT_SECRET,
    },
    smtp: {
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      username: process.env.MAIL_USERNAME,
      password: process.env.MAIL_PASSWORD,
      encryption: process.env.MAIL_ENCRYPTION,
      from: process.env.MAIL_FROM_ADDRESS,
    }
};