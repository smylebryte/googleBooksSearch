const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  title: {
    type: String,
  },
  authors: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
