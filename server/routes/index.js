import express from 'express'

const Router = express.Router()


Router.get('/esda', (req, res) => {
    res.send('router')
})

module.exports = Router