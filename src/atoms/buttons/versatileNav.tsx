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

const Button = styled.button``;

const Icon = styled.div``;

const Text = styled.span``;