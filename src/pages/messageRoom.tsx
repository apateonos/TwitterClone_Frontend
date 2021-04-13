import React from 'react';
import { Container, MainComponent } from './base/main';
import { Nav, MessageRoom } from '../containers/index';

export default () => {
  return (
    <Container>
      <Nav />
      <MainComponent>
        <MessageRoom />
      </MainComponent>
    </Container>
  )
}