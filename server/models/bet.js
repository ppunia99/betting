const mongoose = require('mongoose')

const betsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  otheruser: {
    type: String,
  },
  description: {
    type: String,
  },
  amount: {
    type: Number,
  },
  alternative: {
    type: String,
  },
  status: {
    type: String,
  },
  result: {
    type: String,
  },
})

const BetsModel = mongoose.model('bets', betsSchema, 'bets')

module.exports = { BetsModel }
