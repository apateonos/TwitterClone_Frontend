import React from 'react';
import styled from 'styled-components';
import { CreateAccountDock, LoginAccountDock } from '../components/index';

export default () => {
  return (
    <Container>
      <LoginAccountDock/>
    </Container>
  )
}

const Container = styled.main`
  display: flex;
  justify-content: center;
`;