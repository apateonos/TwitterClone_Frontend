import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthorizationContainer, ProfileContainer, HomeContainer, MessageContainer } from '../containers/index';

function Routes() {
  const isLogin = true;
  return (
    <Router>
      {
        isLogin
        ? 
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/message" component={MessageContainer} />
            <Route path="/:id" component={ProfileContainer} />
          </Switch>
        : 
          <Switch>
            <Route exact path="/" component={AuthorizationContainer} />
            <Route path="/:id" component={ProfileContainer} />
          </Switch>
      }
    </Router>
  );
}

export default Routes;