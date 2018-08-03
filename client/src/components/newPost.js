import React from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

export default class NewPost extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      url: null,
      redirect: false,
      loading: false,
      movie: null
    }
  }

  handleInput(e){
    this.setState({ url: e.target.value })
  }

  async getData(e){
    e.preventDefault()
    this.setState({ loading: true })
    const data = await axios.post('/movie', {url: this.state.url})
    if(data.data){
      const movie = data.data
      this.setState({ loading: false, movie, redirect: true })
    }else{
      alert(data.data.message)
    }
  }

  render() {
      if(this.state.redirect){
        return (
          <Redirect to={`/single/${this.state.movie._id}`}/>
        )
      }else{
        return (
          <div class="io-comment_form">
            <h3>Enter imdb url</h3>
            <form class="io-contact_form">
              <div class="io-row">
                <div class="col col--1-of-2 io-form__group">
                  <input 
                    type="text"
                    placeholder="https://www.imdb.com/title/tt3107288/" 
                    name="name" 
                    required="required" 
                    class="form_input"
                    onChange={this.handleInput.bind(this)}
                  />
                </div>
                <div class="col col--12-of-12 io-form__group">
                  <input 
                    type="submit"
                    value={this.state.loading? 'Loading...' : 'Submit'}
                    name="message"
                    onClick={this.getData.bind(this)}
                    class="form_submit io-btn"
                    disabled={this.state.loading? true : false}
                  />
                </div>
              </div>
            </form>
          </div>
        )
      }
  }
}