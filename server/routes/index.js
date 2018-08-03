import express from 'express'
import Controller from '../controllers/controller'
const Router = express.Router()


Router.post('/esda', Controller.scrapeData)

module.exports = Router