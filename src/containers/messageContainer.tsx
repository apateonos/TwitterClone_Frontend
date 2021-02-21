import React from 'react';
import styled from 'styled-components';
import { AsideContainer, HeaderContainer } from './index';

function MessageContainer () {
  return (
    <>
      <HeaderContainer/>
      message
      <AsideContainer/>
    </>
  )
}

export default MessageContainer;

const Container: any=styled.div`
  display: flex;

  @media only screen and (max-width: 500px){
    display:block;
  }
`;