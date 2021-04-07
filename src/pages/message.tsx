import React from 'react';
import { Container, MainComponent } from './base/main';
import { Nav, Message } from '../containers/index';

export default () => {
  return (
    <Container>
      <Nav />
      <MainComponent>
        <Message />
      </MainComponent>
    </Container>
  )
}