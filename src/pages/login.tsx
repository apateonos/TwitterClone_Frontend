import React from 'react';
import styled from 'styled-components';
import { Login } from '../containers/index';

export default () => {
  return (
    <Container>
      <Login />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
`;