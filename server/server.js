import express from 'express'
import path from 'path'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
require('babel-polyfill')
const Router = require('./routes/index')
dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/', Router)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next()
})


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  })
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
  mongoose.connect(process.env.MONGODB_URL, () => {
    console.log('Database connection established')
  })
})

export default app