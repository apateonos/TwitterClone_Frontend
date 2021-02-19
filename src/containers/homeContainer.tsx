import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Home } from '../pages/index';
import { AsideContainer, HeaderContainer } from './index';

function HomeContainer () {
  const [ twitList, setTwitList ] = useState([]);
  const [ writeTwit, setWriteTwit ] = useState('');


  const onChangeHandler = (e: { target: HTMLInputElement}) => {
    let val: string = e.target.value;
    setWriteTwit(val);
  }

  const onClickPost = () => {

  }

  const onClickImageFile = () => {

  }

  useEffect(()=> {}, []);

  return (
    <Container>
      <HeaderContainer/>
      <Home/>
    </Container>
  )
}

export default HomeContainer;

const Container: any = styled.div`
  display: flex;

  @media only screen and (max-width: 500px){
    display:block;
  }
`;