import TwitButtonIcon from 'assets/images/twitButton';
import React, { useRef } from 'react';
import styled from 'styled-components';

interface props {
  onClickHandler: any;
}

const TwitButton = ({onClickHandler}:props ) => {
  
  return (
    <Button onClick={()=>onClickHandler()}>
      <Text>Twit</Text>
      <TwitButtonIcon/>
    </Button>
  )
}

export default TwitButton;

const Button: any = styled.button`
  border-radius: 25px;
  width: 300px;
  height: 50px;

  color: white;
  background: blue;

  @media only screen and (max-width: 1280px) {
    width: 50px;
  }

  @media only screen and (max-width: 500px) {
    position: absolute;
    top: -30px;
    right: 30px;
  }
`;

const Text: any = styled.div`
  overflow: hidden;

  @media only screen and (max-width: 1280px) {
    width: 0;
  }
`;