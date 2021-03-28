import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Auth, Profile, Tweet, Temp } from '../containers/index';

interface props {
  isLogin: boolean;
}

export default ({ isLogin }: props) => {
  return (
    <Router>
      <Switch>
        <Route exact path = "/temp" component={Temp} />
        <Route exact path = "/" component={isLogin ? Home : Auth} />
        <Route exact path = "/login" component={Auth} />
        <Route path = "/tweet/:tweetNumber" component={Tweet} />
        <Route path = "/:userUniqueName" component={Profile} />
      </Switch>
    </Router>
  )
}

