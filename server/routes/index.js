import express from 'express'
import Controller from '../controllers/controller'
const Router = express.Router()


Router.post('/movie', Controller.scrapeData)
Router.get('/movies', Controller.getAllMovies)
Router.get('/movies/:id', Controller.getOneMovie)


module.exports = Router