const { version } = require('../../package.json');
const config = require('../config/config');

const swaggerDef = {
    openapi: '3.0.0',
    info: {
        title: 'Swagger Docs',
        version,
        license: {
            name: 'ISC',
            url: ' https://github.com/manjesh-yadav/node-mongo-express-starter.git',
        },
    },
    servers: [
        {
            url: `http://localhost:${config.port}/api/v1`,
        }
    ],
};

module.exports = swaggerDef;