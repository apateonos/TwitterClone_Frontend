import React from 'react';
import { Container, MainComponent } from './base/main';
import { Nav, Profile } from '../containers/index';

export default () => {
  return (
    <Container>
      <Nav />
      <MainComponent>
        <Profile />
      </MainComponent>
    </Container>
  )
}