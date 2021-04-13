import React from 'react';
import styled from 'styled-components';
import { mainLogo } from '../assets/images/svg';

export default () => {
  return (
    <Container>
      <Wrap>
      <Logo>{mainLogo}</Logo>
      <Text>NOT FOUND 404</Text>
    
      </Wrap>
      </Container>
  )
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div``;

const Logo = styled.div`
  width: 30vw;
  height: 30vw;
  margin: 0 auto;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Text = styled.div`
  font-size: 10vw;
  font-weight: 900;
`;