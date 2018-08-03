import Post from '../models/post'

exports.newPost = async (req, res) => {
  const { article, title, author } = req.body
  if(article && title && author){
    const post = await Post.create(req.body)
    res.status(200).json({
      success: true,
      post
    })
  }else{
    res.status(400).json({
      success: false,
      message: 'All posts are required'
    })
  }
}

exports.getOnePost = async (req, res) => {
  const post = await Post.findById(req.params.postId)
  if(post){
    res.json({
      success: true,
      post
    })
  }else{
    res.status(200).json({
      success: false,
      message: 'Post not found.'
    })
  }
}

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find()
  res.status(200).json({
    posts
  })
}