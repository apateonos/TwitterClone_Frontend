
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { tweet } from '../../../../assets/images/svg';
import { TweetDock } from '../../../index';

export default () => {
  const dispatch = useDispatch();
  
  return (
    <Button onClick={() => dispatch({type: "OPEN_MODAL", payload: <TweetDock/>})}>
      <Icon>{tweet}</Icon>
      <Text>Tweet</Text>
    </Button>
  )
}

const Button: any = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 50px;
  margin: 5px 0;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: ${props => props.theme.color.blue};
  border-radius: 25px;

  :hover {
    background: ${props => props.theme.color.lightBlue};
  }

  @media only screen and (max-width: 1280px) {
    width: 50px;
  }

  @media only screen and (max-width: 500px) {
    position: absolute;
    top: -80px;
    right: 30px;
  }
`;

const Text: any = styled.div`
  overflow: hidden;

  @media only screen and (max-width: 1280px) {
    width: 0;
    height: 0;
  }
`;

const Icon: any = styled.div`
  overflow:hidden;

  width: 0;
  height: 0;

  @media only screen and (max-width: 1280px) {
    width: 30px;
    height: 30px;

    svg {
      fill: white;
    }
  }
`;