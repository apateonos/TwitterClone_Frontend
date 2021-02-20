import React from 'react';
import styled from 'styled-components';

interface props {
  onClickHandler: any;
}

const TwitButton = ({onClickHandler}:props ) => {

  return (
    <Button onClick={()=>onClickHandler()}>
      Twit   
    </Button>
  )
}

export default TwitButton;

const Button: any = styled.button`
  @media only screen and (max-width: 500px) {
    position: absolute;
    top: -30px;
    right: 30px;
  }
`;