const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageConnectionSchema = new Schema({
  user1: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    unique_id: {
      type: String,
      required: true
    }
  },
  user2: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    unique_id: {
      type: String,
      required: true
    }
  },
  messages: [
    {
      user: {
        type: String
      },
      message: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now()
      }
    }
  ]
});

module.exports = MessageConnection = mongoose.model(
  "messageConnection",
  MessageConnectionSchema
);
