import React from 'react';
import { Container, MainComponent } from './base/main';
import { Nav, Room } from '../containers/index';

export default () => {
  return (
    <Container>
      <Nav />
      <MainComponent>
        <Room />
      </MainComponent>
    </Container>
  )
}