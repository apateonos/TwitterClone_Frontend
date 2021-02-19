import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthorizationContainer, ProfileContainer, HomeContainer } from '../containers/index';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/auth" component={AuthorizationContainer} />
        <Route exact path="/profile" component={ProfileContainer} />
        <Route path="/profile/:id" component={ProfileContainer} />
      </Switch>
    </Router>
  );
}

export default Routes;