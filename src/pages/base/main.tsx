import React from 'react';
import { Navigation, Aside, Footer } from '../../containers/index';
import styled from 'styled-components';
import { Header } from '../../containers/index';

interface props {
  components: React.ReactNode;
  title: string;
}

export default ( { components, title }: props ) => {
  return (
    <Container>
      <Navigation/>
      <ComponentBox>
        <Header title={title} />
        {components}
      </ComponentBox>
      <Aside/>
      <Footer/>
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