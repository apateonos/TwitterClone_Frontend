import React from 'react';
import styled from 'styled-components';

interface TweetButtonUseProps {
  onClick: Function;
  name: string;
  icon: any;
  text: string;
}
export default ({ onClick, name, icon, text }: TweetButtonUseProps) => {
  return (
    <Button onClick={(e)=>onClick(e)} name={name}>
      <Icon>{icon}</Icon>
      <Text>{text}</Text>
    </Button>
  )
}

const Button = styled.button``;

const Icon = styled.div``;

const Text = styled.span``;