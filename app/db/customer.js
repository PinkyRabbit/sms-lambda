const { Schema, model } = require("mongoose");

const { MessageScheema } = require("./message");

const CustomerScheema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  messages: [MessageScheema],
});

const CustomerModel = model('customer', CustomerScheema);

module.exports = {
  CustomerModel,
};
