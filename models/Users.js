const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const TransactionSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  cash: {
    type: String
  },
  buys: {
    type: Date
  }
});

module.exports = User = mongoose.model("users", UserSchema);
module.exports = Transactions = mongoose.model(
  "transactions",
  TransactionSchema
);
