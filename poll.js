const { Schema, model } = require("mongoose");
const pollSchema = new Schema({
  title: {
    type: String,
    require: true,
    trim: true /* This trim means it will remove whitespace before/after title */,
  },
  description: {
    type: String,
    require: true,
    trim: true,
  },
  totalVote: {
    type: Number,
    default: 0,
  },
  options: {
    type: [
      {
        name: String,
        vote: Number,
      },
    ],
  },
});
const Poll = model("poll", pollSchema);
module.exports = Poll;
