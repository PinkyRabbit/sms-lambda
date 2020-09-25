const { Router } = require('express');
const expressAsyncHandler = require('express-async-handler');

const router = Router();

router
  .get("/", expressAsyncHandler(getCustomers))
  .post("/", expressAsyncHandler(createADocument))
  .get("/:id", expressAsyncHandler(getCustomerById))
  .put("/:id", expressAsyncHandler(updateCustomer))
  .delete("/:id", expressAsyncHandler(deleteCustomer))
  .post("/send/:id", expressAsyncHandler(sendSMS));

async function createADocument(req, res, next) {

}

async function getCustomers(req, res, next) {

}

async function getCustomerById(req, res, next) {}

async function updateCustomer(req, res, next) {}

async function deleteCustomer(req, res, next) {}

async function sendSMS(req, res, next) {}

module.exports = {
  customersRoutes: router,
};
