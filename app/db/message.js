const { Schema, model } = require("mongoose");

const requiredString = {
  type: String,
  required: true,
};
const MessageScheema = new Schema({
  Message: requiredString,
  PhoneNumber: requiredString,
  createdAt: requiredString,
});

const MessageModel = model("message", MessageScheema);

module.exports = {
  MessageScheema,
  MessageModel,
};
