import request from 'request'
import cheerio from 'cheerio'
import Movie from '../models/movie'

exports.scrapeData = (req, res) => {
  const { url } = req.body
  if(url.includes('imdb.com')){
    let json = {}
    request(url, async (error, response, html) => {
      if(!error || (response.statusCode !== 404 || '404')){
        let $ = cheerio.load(html)
        let title, release
        $('.title_wrapper').filter(function(){
          let data = $(this)
          title = data.children().first().text().trim()
          release = data.children().last().children().last().text().trim()
          json.title = title
          json.release = release
        })
        json.summary = $('.summary_text').text().trim()
        const newMovie = await Movie.create(json)
        console.log(newMovie)
        res.json(json)
      }else{
        res.json({
          success: false,
          message: 'Url is not valid'
        })
      }
    })
  }else{
    res.json({
      success: false,
      message: 'Please enter a valid imdb url'
    })
  }
}