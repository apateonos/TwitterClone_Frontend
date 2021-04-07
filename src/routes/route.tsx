import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Login, Profile, Tweet, Explore, Message, Room, NotFoundPage } from '../pages/index';
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
        <Route exact path = "/explore" component={Explore} />
        <Route exact path = "/message" component={Message} />
        <Route exact path = "/message/:roomNumber" component={Room} />
        <Route exact path = "/tweet/:tweetNumber" component={Tweet} />
        <Route exact path = "/profile/:userUniqueName" component={Profile} />
        <Route path='*' component={NotFoundPage} />
      </Switch>
    </Router>
  )
}