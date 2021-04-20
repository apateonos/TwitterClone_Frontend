import React from 'react';
import styled from 'styled-components';
import { Login } from '../containers/index';

export default () => {
  return (
    <Container>
      <But>dsdsdsd</But>
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

const But = styled.div`
  color: ${props => props.theme.change('em').red};
  font-size: 70px;
`;