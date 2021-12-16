const express = require('express');
const mongoose = require('mongoose');
const app = express();
const helmet = require("helmet");
const cors = require('cors');
const routes = require("./routes/v1");

const config = require('./config/config');


const port = process.env.PORT || 3000;




// Register Middleware for CORS, parse JSON, form data
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(helmet());


app.use('/api/v1', routes);

let server;
mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  console.log('Connected to MongoDB');
  server = app.listen(config.port, () => {
    console.log(`Listening to port ${config.port}`);
  });
});