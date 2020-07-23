import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import UserRepositories from '../user-repositories'

class Home extends Component {
  render() {
    return (
      <Fragment>
        <h1>Home</h1>
        <Route path="/user-repositories" component={UserRepositories} />
      </Fragment>
    )
  }
}

export default Home
