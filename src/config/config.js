const dotenv = require('dotenv');
const path = require('path');
const Joi = require('joi');
console.log("ENV",process.env.NODE_ENV);
const envPath = path.join(__dirname, `../../.env${process.env.NODE_ENV ? `.${process.env.NODE_ENV.trim()}` : ``}`);
dotenv.config({ path: envPath });

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().default('development'),
    PORT: Joi.number().default(3000),
    MONGODB_URL: Joi.string().required().description('Mongo DB url'),
    JWT_SECRET: Joi.string().required().description('JWT secret key'),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}: ${process.env}`);
}

module.exports = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    mongoose: {
      url: envVars.MONGODB_URL,
      options: {
        // useCreateIndex: true,
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
      },
    },
    jwt: {
      secret: envVars.JWT_SECRET,
    }
  };