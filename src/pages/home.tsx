import React from 'react';
import { Container, MainComponent } from './base/main';
import { Nav, Home } from '../containers/index';

export default () => {
  return (
    <Container>
      <Nav />
      <MainComponent>
        <Home />
      </MainComponent>
    </Container>
  )
}