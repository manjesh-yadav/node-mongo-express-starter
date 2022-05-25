const express = require('express');
const helmet = require("helmet");
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const routes = require("./routes");
const config = require('./config/config');

const port = process.env.PORT || 3000;
const app = express();

// Register Middleware for CORS, parse JSON, form data
app.use(cors());
app.use(express.json());

// logging
const accessLogStream = fs.createWriteStream(path.join(__dirname, '../logs/access.log'), { flags: 'a' })
morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(morgan(':date[clf] :method :url :status :response-time ms - :res[content-length] :body - :req[content-length]', { stream: accessLogStream }));

app.use(express.urlencoded({ extended: true}));
app.use(helmet());

app.use('/api', routes);

app.use('*', (req, res) => {
    res.status(404).send('Not Found');
});

let server;
server = app.listen(config.port || port, () => {
    console.log(`Listening to port ${config.port || port}`);
});