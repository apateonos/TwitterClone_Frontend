import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Login, Profile, Tweet } from '../pages/index';

interface props {
  isLogin: boolean;
}

export default ({ isLogin }: props) => {
  console.log(isLogin);
  return (
    <Router>
      <Switch>
        <Route exact path = "/" component={isLogin ? Home : Login} />
        <Route exact path = "/login" component={Login} />
        <Route path = "/tweet/:tweetNumber" component={Tweet} />
        <Route path = "/:userUniqueName" component={Profile} />
      </Switch>
    </Router>
  )
}