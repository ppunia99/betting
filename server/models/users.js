const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  balance: {
    type: Number,
  },
})

const UserModel = mongoose.model('betting', userSchema, 'users')

module.exports = { UserModel }
