import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Auth, Profile } from '../containers/index';

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path = '/' component={Home} />
        <Route exact path = '/login' component={Auth} />
        <Route exact path = '/profile' component={Profile} />
        <Route exact path = '/:userName' component={Profile} />
      </Switch>
    </Router>
  )
}