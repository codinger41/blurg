import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Spinner from './spinner'

export default class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      movies: null,
      loading: false
    }
  }
  async componentWillMount(){
    this.setState({ loading: true })
    const data = await axios.get('/movies')
    if(data.data.movies){
      const movies = data.data.movies
      this.setState({ movies, loading: false })
    }
  }
  render() {
    return (
      <div>
        <div id="wrapper" class="io-page_wrapper">
          <article class="io-top_article">
            <div class="io-top_article__content">
              <div class="io-top_article__categories cat">
              </div>
              <h2 class="io-top_article__title">
                <a>
                  Blurg Movies
                </a>
              </h2>
            </div>
          </article>
          {
            this.state.loading ? (
              <Spinner />
            ) : (
              <div id="content" class="io-main_content">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-11">
                      <div class="io-articles_list">
                      {
                        this.state.movies.map((movie) => {
                          return (
                            <article class="io-article article_large" key={movie._id} >
                              <Link to={`/single/${movie._id}`} class="io-article_content">
                                <div class="io-article_thumb"></div>
                                <h3 class="io-article_excerpt">{movie.title}</h3>
                              </Link>
                              <div class="io-article_meta">
                                <div class="io-article_date">{movie.release}</div>
                              </div>
                            </article>
                          )
                        })
                      }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}