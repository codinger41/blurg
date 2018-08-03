import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../server'
const { expect } = chai
chai.use(chaiHttp)

describe('Blurg API Test', () => {
  describe('GET /movies', () => {
    // Test to get all movies
    it(' should Return an array of movies', (done) => {
      chai
        .request(app)
        .get('/movies')
        .end((err, res) => {
          expect(Array.isArray(res.body.movies))
            .to
            .be
            .equal(true)
          done()
      })
    })
  })
  describe('POST /movies', () => {
    // Test to get all movies
    it(' should Return an object of a movie', function(done){
      this.timeout(15000)
      chai
        .request(app)
        .post('/movie')
        .send({ url: 'https://www.imdb.com/title/tt3107288/' })
        .end((err, res) => {
          expect(typeof res.body)
            .to
            .be
            .equal('object')
          done()
      })
    })
  })
})