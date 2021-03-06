import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Login, Profile, Tweet, Explore, Message, Room, NotFound } from '../pages/index';
import { Modal } from '../containers/index';

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
        <Route exact path = "/message" component={isLogin ? Message : Login} />
        <Route exact path = "/message/:room_id" component={isLogin ? Room : Login} />
        <Route exact path = "/tweet/:tweet_id" component={Tweet} />
        <Route exact path = "/profile/:unique_name" component={Profile} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  )
}