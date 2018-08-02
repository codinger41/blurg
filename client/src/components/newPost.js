import React from 'react'
import { Link } from 'react-router-dom'

export default class NewPost extends React.Component {
  render() {
    return (
      <div class="io-comment_form">
        <h3>Add a new Blurg post</h3>
        <form class="io-contact_form">
          <div class="io-row">
            <div class="col col--1-of-2 io-form__group">
              <input type="text" placeholder="Name:" name="name" id="first-name" required="required" class="form_input"/>
            </div>
            <div class="col col--1-of-2 io-form__group">
              <input type="text" placeholder="Email:" name="email" id="email" required="required" class="form_input"/>
            </div>
            <div class="col col--12-of-12 io-form__group">
              <textarea rows="6" placeholder="Comment:" name="message" id="text_message" required="required" class="form_input"></textarea>
            </div>
            <div class="col col--12-of-12 io-form__group">
              <input type="submit" value="Send Message" name="message" id="send_message" class="form_submit io-btn"/>
            </div>
          </div>
        </form>
      </div>
    )
  }
}