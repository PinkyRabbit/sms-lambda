require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const AWS = require("aws-sdk");
const sls = require("serverless-http");
const asyncHandler = require("express-async-handler");
const createError = require("http-errors");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// DB connect
mongoose.connect(process.env.MONGODB_CONNECT_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const { connection } = mongoose;
connection.once("open", function () {
  console.log(`we're connected!`);
});
connection.on('error', console.error.bind(console, 'Mongoose connection error:'));

// Schemas

// Models

// Routes

// Errors
