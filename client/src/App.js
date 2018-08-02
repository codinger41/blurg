import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Router from './router'
import Header from './components/header'
import Footer from './components/footer'

export default class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Route component={Header} />
          <Route component={Router} />
          <Route component={Footer} />
        </div>
      </BrowserRouter>
    )
  }
}
