import React from 'react';
import { Nav, Explore } from '../containers/index';
import { Container, MainComponent } from './base/main';

export default () => {
  return (
    <Container>
      <Nav />
      <MainComponent>
        <Explore />
      </MainComponent>
    </Container>
  )
}