import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Spinner from './components/spinner'
import Home from './components/home'
import SinglePost from './components/singlePost'
import NewPost from './components/newPost'

const Router = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/single/:id' component={SinglePost} />
      <Route path='/new' component={NewPost} />
    </Switch>
  </div>
)

export default Router