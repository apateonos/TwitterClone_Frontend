//import { AsideContainer, HeaderContainer } from 'containers';
import { HeaderContainer } from '../../containers/index';
import React from 'react';
import styled from 'styled-components';

interface props {
  component: any;
  title: string;
}

function Main ({component, title}:props) {
  return (
    <Container>
      <HeaderContainer title={title}/>
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
  width: 100%;
  @media only screen and ( min-width: 500px ) {
    width: 600px;
    min-height: 100vh;
    
    border-left: 1px solid #cfcfcf;
    border-right: 1px solid #cfcfcf;
  }
`;