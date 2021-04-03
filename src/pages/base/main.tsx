import React from 'react';
import { Nav, Header, Aside, Footer } from '../../containers/index';
import styled from 'styled-components';

interface props {
  component: React.ReactNode;
  title: string;
}

export default ( { component, title }: props ) => {
  return (
    <Container>
      <Nav />
      <ComponentBox>
        <Header />
        {component}
      </ComponentBox>
    </Container>
  )
}

const Container = styled.div`
  @media only screen and ( min-width: 500px ) {
    display: flex;
    justify-content: center;
  }
`;

const ComponentBox = styled.div`
  width: 100%;
  background: #efefef;

  @media only screen and ( min-width: 500px ) {
    width: 600px;
    min-height: 100vh;
    
    border-left: 1px solid #cfcfcf;
    border-right: 1px solid #cfcfcf;
  }
`;