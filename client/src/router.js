import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Spinner from './components/spinner'
import Home from './components/home'
import SinglePost from './components/singlePost'

const Router = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/single' component={SinglePost} />
    </Switch>
  </div>
)

export default Router