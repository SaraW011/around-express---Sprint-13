const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /http(s)?:\/\/[www.]?\S+/gi.test(v);
      }
    }
  },
  owner: {
    type: String,
    required: true
  },
  likes: [
    {
      type: Array,
      ref: "user",
      default: []
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("card", cardSchema);
