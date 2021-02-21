import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Home } from '../pages/index';
import { AsideContainer, HeaderContainer } from './index';

function HomeContainer () {
  const [ twitList, setTwitList ]=useState([]);
  const [ writeTwit, setWriteTwit ]=useState('');


  const onChangeHandler=(e: { target: HTMLInputElement}) => {
    let val: string=e.target.value;
    setWriteTwit(val);
  }

  const onClickPost=() => {
    
  }

  const onClickImageFile=() => {

  }

  useEffect(()=> {
    
  }, []);

  return (
    <Home 
      twitList={twitList} 
      writeTwit={writeTwit} 
      onChangeHandler={onChangeHandler}
    />
  )
}

export default HomeContainer;