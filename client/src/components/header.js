import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
  render() {
    return (
      <header class="io-main_header box_shadow">
        <div class="container-fluid header_container">
          <div class="io-sidebar_trigger"><i class="fa fa-bars"></i></div>
            <div class="io-main_logo">
              <Link to='/'>BLURG</Link>
            </div>
          <div class="io-search_box"><i class="fa fa-search"></i></div>
        </div>
      </header>
    )
  }
}