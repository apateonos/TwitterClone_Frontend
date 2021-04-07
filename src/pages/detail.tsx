import React from 'react';
import { Nav, Detail } from '../containers/index';
import { Container, MainComponent } from './base/main';

export default () => {
  return (
    <Container>
      <Nav />
      <MainComponent>
        <Detail />
      </MainComponent>
    </Container>
  )
}