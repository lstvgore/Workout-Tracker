const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//we need to change the Schema//
const WorkOutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for transaction"
  },
  value: {
    type: Number,
    required: "Enter an amount"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const WorkOut = mongoose.model("WorkOut", WorkOutSchema);

module.exports = WorkOut;
