require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const sls = require("serverless-http");

const { initRoutes } = require('./router');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// DB connect
mongoose.connect(process.env.MONGODB_CONNECT_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const { connection } = mongoose;
connection.once("open", onDbConnect);
connection.on('error', console.error.bind(console, 'Mongoose connection error:'));

function onDbConnect() {
  initRoutes(app);

  if (process.env.NODE_ENV !== "sls") {
    app.listen(3000, () => console.log(">> Server is live!"));
  }
}

// serverless activation
module.exports = { app };
