//import { AsideContainer, HeaderContainer } from 'containers';
import { HeaderContainer } from '../../containers/index';
import React from 'react';
import styled from 'styled-components';

interface props {
  component: any;
}

function Main ({component}:props) {
  return (
    <Container>
      <HeaderContainer/>
      <ComponentBox>
        {component}
      </ComponentBox>
    </Container>
  )
}

export default Main;

const Container = styled.div`
  @media only screen and ( min-width: 500px ) {
    display: flex;
    justify-content: center;
  }
`;

const ComponentBox = styled.div`
  @media only screen and ( min-width: 500px ) {
    min-height: 100vh;
    width: 600px;

    border-left: 1px solid #cfcfcf;
    border-right: 1px solid #cfcfcf;
  }
`;