import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface TweetTextUseProps {
  text: string;
  to?: string;
}
export default ({ text, to }: TweetTextUseProps) => {
  return (
    <>{ to 
      ? <Link to={`/propfile/${to}`} >
          <Text>{text}</Text>
        </Link> 
      : <Text>{text}</Text>
    }</>
  )
}

const Text = styled.p`
`;