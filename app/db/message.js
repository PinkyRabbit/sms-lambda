const { Schema, model } = require("mongoose");

const MessageScheema = new Schema({
  message: {
    type: String,
    required: true,
  },
});

const MessageModel = model("message", MessageScheema);

module.exports = {
  MessageScheema,
  MessageModel,
};
