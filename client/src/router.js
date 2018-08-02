import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Spinner from './components/spinner'
import Home from './components/home'

const Router = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  </div>
)

export default Router