const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MutualDetailSchema = new Schema({
  users: [
    {
      user1: {
        type: String,
        required: true
      },
      user2: {
        type: String,
        required: true
      }
    }
  ],
  messages: [
    {
      message: {
        type: String
      },
      username: {
        type: String,
        required: true
      },
      userId: {
        type: String,
        required: true
      },
      timeStamp: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

module.exports = Mutual = mongoose.model("mutualDetails", MutualDetailSchema);
