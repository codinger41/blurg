import React from 'react'
import { Link } from 'react-router-dom'

export default class SideBar extends React.Component {
  render() {
    return (
      <div>
        <aside id="off-sidebar" class="io-nav_sidebar">
          <div class="io-sidebar_content">
            <div class="io-sidebar_trigger"><i class="fa fa-times"></i></div>
            <nav class="io-main_nav">
              <ul class="io-nav_list">
                <li><Link to='/new'><i class="fa fa-home"></i>New Movie</Link></li>
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    );
  }
}