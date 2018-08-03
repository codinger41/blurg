import express from 'express'
import PostsController from '../controllers/postcontroller'
const Router = express.Router()


Router.get('/esda', (req, res) => {
  res.send('router')
})

Router.get('/posts/:postId', PostsController.getOnePost)
Router.post('/posts/new', PostsController.newPost)
Router.get('/posts', PostsController.getAllPosts)

module.exports = Router