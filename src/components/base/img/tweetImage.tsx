import React from 'react'
import styled from 'styled-components';
import { baseUrl } from '../../../config/config';

interface TweetImageUseProps { 
  image: string;
}
export default ({ image }: TweetImageUseProps) => {
  return (
    <TweetImage src={image ? image : ''}/>
  )
}

const TweetImage = styled.img`
  width: 100%;
  height: width/7;
  border-radius: 50px;
  overflow: hidden;
  object-fit: cover;
`;