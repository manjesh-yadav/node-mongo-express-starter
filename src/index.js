const express = require('express');
const app = express();
const helmet = require("helmet");
const cors = require('cors');
const routes = require("./routes");

const config = require('./config/config');

const port = process.env.PORT || 3000;

// Register Middleware for CORS, parse JSON, form data
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(helmet());

app.use('/api', routes);

let server;
server = app.listen(config.port || port, () => {
    console.log(`Listening to port ${config.port || port}`);
});