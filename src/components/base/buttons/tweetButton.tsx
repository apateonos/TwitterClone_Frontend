
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { nav } from '../../../assets/images/svg';

interface TweetButtonUseProps {
  onClick: Function;
  name: string;
}
export default ({ onClick, name }: TweetButtonUseProps) => {
  return (
    <Button onClick={(e)=>onClick(e)} name={name}>
      <Icon>{nav.tweet}</Icon>
      <Text>Tweet</Text>
    </Button>
  )
}

const Button = styled.button`
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

const Text = styled.div`
  overflow: hidden;

  @media only screen and (max-width: 1280px) {
    width: 0;
    height: 0;
  }
`;

const Icon = styled.div`
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