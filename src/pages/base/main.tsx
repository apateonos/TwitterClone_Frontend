import styled from 'styled-components';

export const Container = styled.div`
  @media only screen and ( min-width: 500px ) {
    display: flex;
    justify-content: center;
  }
`;

export const MainComponent = styled.main`
  min-height: 100vh;
  background: #efefef;

  @media only screen and ( min-width: 500px ) {
    width: 600px;
    
    border-left: 1px solid #cfcfcf;
    border-right: 1px solid #cfcfcf;
  }
`;