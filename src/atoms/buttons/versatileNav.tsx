import { useClick } from '../../handler/index';
import React from 'react';
import styled from 'styled-components';

interface TweetButtonUseProps {
  name: string;
  icon: any;
  text: string;
}
export default ({ name, icon, text }: TweetButtonUseProps) => {
  const onClickHandler = useClick();
  return (
    <Button onClick={(e)=>onClickHandler(e)} name={name}>
      <Icon>{icon}</Icon>
      <Text>{text}</Text>
    </Button>
  )
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;

  font-size: 20px;
  font-weight: 700;
  padding: 7px 15px;
  background: black;
  border-radius: 1.5em;
  transition-duration: 0.4s;
  :hover {
    background: #efefef;
  }

  @media only screen and ( min-width: 768px ) {
    width: auto;
    padding: 0 25px;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  
  svg {
    width: 30px;
    height: 30px;
    fill: white;
  }

  @media only screen and ( min-width: 768px ) {
    display: none;
  }
`;

const Text = styled.span`
  display: none;
  font-size: 20px;
  font-weight: 700;
  color: white;

  @media only screen and ( min-width: 768px ) {
    display: block;
  }
`;