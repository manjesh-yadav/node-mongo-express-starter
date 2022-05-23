require('dotenv').config()

module.exports = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    mySQL: {
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
    },
    jwt: {
      secret: process.env.JWT_SECRET,
    }
};