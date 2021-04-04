import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Login, Profile, Tweet } from '../pages/index';
import { Modal } from '../components/index';

interface props {
  isLogin: boolean;
  isModal: boolean;
}

export default ({ isLogin, isModal }: props) => {
  return (
    <Router>
      {isModal && <Modal/>}
      <Switch>
        <Route exact path = "/" component={isLogin ? Home : Login} />
        <Route exact path = "/login" component={Login} />
        <Route path = "/tweet/:tweetNumber" component={Tweet} />
        <Route path = "/:userUniqueName" component={Profile} />
      </Switch>
    </Router>
  )
}