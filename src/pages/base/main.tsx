import React from 'react';
import { Header, Aside, Footer } from '../../containers/index';
import styled from 'styled-components';

interface props {
  components: React.ReactNode;
}
export default ( { components }: props ) => {
  return (
    <Container>
      <Header/>
      <ComponentBox>{components}</ComponentBox>
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
  @media only screen and ( min-width: 500px ) {
    width: 600px;
    min-height: 100vh;
    
    border-left: 1px solid #cfcfcf;
    border-right: 1px solid #cfcfcf;
  }
`;