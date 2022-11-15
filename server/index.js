const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { UserModel } = require('./models/users')
const { BetsModel } = require('./models/bet')

const cors = require('cors')
app.use(express.json())
app.use(cors())

mongoose.connect(
  'mongodb+srv://ppunia:ppunia@fittrack.lvibdpj.mongodb.net/fittrack?retryWrites=true&w=majority',
)

/////////
app.get('/getUsers', (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err)
    } else {
      res.json(result)
      console.log('returned', result)
    }
  })
})

app.post('/usersInput', async (req, res) => {
  const user = req.body
  const newUser = new UserModel(user)
  await newUser.save()
  res.json(user)
})

/////////
app.get('/getBets', (req, res) => {
  BetsModel.find({}, (err, result) => {
    if (err) {
      res.json(err)
    } else {
      res.json(result)
      console.log('returned', result)
    }
  })
})

app.post('/betsInput', async (req, res) => {
  const bet = req.body
  const newBet = new BetsModel(bet)
  await newBet.save()
  res.json(bet)
})

app.listen(3000, () => {
  console.log('Betting SERVER IS RUNNING !')
})
