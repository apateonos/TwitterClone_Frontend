import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Auth, Profile, Tweet } from '../containers/index';

interface props {
  login: boolean;
}

export default ({login}: props) => {
  return (
    <Router>
      {login ? <Switch>
        <Route exact path = "/" component={Home} />
        <Route exact path = "/login" component={Auth} />
        <Route path = "/tweet/:tweetNumber" component={Tweet} />
        <Route path = "/:userUniqueName"  component={Profile} />
      </Switch> :
      <Switch>
        <Route exact path = "/login" component={Auth} />
        <Route exact path = "/" component={Auth} />
        <Route path = "/tweet/:tweetNumber" component={Tweet} />
        <Route path = "/:userUniqueName" component={Profile} />
      </Switch>}
    </Router>
  )
}