import React from 'react'

export default class Spinner extends React.Component {
  render() {
    return (
      <div class="ps_preloader">
        <div class="spinner">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
        </div>
      </div>
    )
  }
}