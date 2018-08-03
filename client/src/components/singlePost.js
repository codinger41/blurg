import React from 'react'
import axios from 'axios'
import Spinner from './spinner'

export default class SinglePost extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      movie: null,
      loading: false
    }
  }
  async componentWillMount(){
    this.setState({ loading: true })
    const data = await axios.get(`/movies/${this.props.match.params.id}`)
    if(data.data){
      const movie = data.data
      this.setState({ movie, loading: false })
    }else{
      alert(JSON.stringify(data.data.message))
    }
  }
  render() {
    return (
      <div id="wrapper" class="io-page_wrapper">
        <div>
          <article id="single" class="io-single_article">
            {
              this.state.loading ? (
                <div class="io-single_top">
                  <h1>Loading...</h1>
                </div>
              ) : (
                <div>
                  <div class="io-single_top">
                    <div class="io-single_thumbnail"></div>
                    <div class="io-article_categories cat">
                    </div>
                    <h2 class="io-single_article__title">{this.state.movie.title}</h2>
                    <div class="io-single_article__date"><span>{this.state.movie.release}</span></div>
                  </div>
                  <div class="io-single_middle">
                    <div class="container-fluid">
                      <div class="io-single__content">
                        <p>{this.state.movie.summary}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          </article>
        </div>
      </div>
    )
  }
}