const { Router } = require('express');
const expressAsyncHandler = require('express-async-handler');

const {
  CustomerModel,
  MessageModel,
} = require('../db');
const { sendSmsAWS } = require('../services/sns');

const router = Router();

router
  .get("/", expressAsyncHandler(getCustomers))
  .post("/", expressAsyncHandler(createCustomers))
  .get("/:id", expressAsyncHandler(getCustomerById))
  .put("/:id", expressAsyncHandler(updateCustomer))
  .delete("/:id", expressAsyncHandler(deleteCustomer))
  .post("/send/:id", expressAsyncHandler(sendSMS));

async function createCustomers(req, res, next) {
  const customer = await CustomerModel.create({
    ...req.body,
    messages: [],
  });

  res.status(200).json(customer);
}

async function getCustomers(req, res, next) {
  const customers = await CustomerModel.find({});
  res.status(200).json(customers);
}

async function getCustomerById(req, res, next) {
  const { id } = req.params;

  const customer = await CustomerModel.findById(id);
  if (!customer) {
    throw createError(404, `A customer with the id ${id} does not exist`);
  }

  res.status(200).json(customer);
}

async function updateCustomer(req, res, next) {
  const { id } = req.params;
  const customer = await CustomerModel.update(
    { _id: id },
    { $set: req.body },
    { new: true },
  );
  res.status(200).json(customer);
}

async function deleteCustomer(req, res, next) {
  const { id } = req.params;
  await CustomerModel.remove({ _id: id });
  res.status(200).json({ success: true });
}

async function sendSMS(req, res, next) {
  const { id } = req.params;
  const { message } = req.body;

  const customer = await CustomerModel.findById(id);
  if (!customer) {
    throw createError(404, `A customer with the id ${id} does not exist`);
  }

  const payload = {
    Message: message,
    PhoneNumber: customer.phoneNumber,
  };
  await sendSmsAWS(payload);
  await MessageModel.create({
    ...payload,
    createdAt: new Date().toISOString(),
  });

  res.status(200).json({ success: true });
}

module.exports = {
  customersRoutes: router,
};
