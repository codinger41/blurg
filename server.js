const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
require('babel-polyfill')
const router = require('./server/routes/index')
dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/', router)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next()
})

// API calls
app.get('/api/ping', (req, res) => {
  res.send({ pong: 'pong' })
})

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')))

  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.json({
      message: 'Endpoint not found'
    }).status(404)
  })
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
  mongoose.connect(process.env.MONGODB_URL, () => {
    console.log('Database connection established')
  })
})