import React from 'react'
import styled from 'styled-components';
import { baseUrl } from '../../../config/config';

interface TweetImageUseProps { 
  image: string;
}
export default ({ image }: TweetImageUseProps) => {
  return (
    <TweetImage src={image}/>
  )
}

const TweetImage = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 50px;
  border: 2px solid ${props => props.theme.color.borderGray};
  overflow: hidden;
`;