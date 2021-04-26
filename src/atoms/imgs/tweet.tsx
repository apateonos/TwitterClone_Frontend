import React from 'react'
import styled from 'styled-components';
import { baseURL } from '../../config/config';

interface TweetImageUseProps { 
  onClick?: Function;
  image: string;
}
export default ({ image }: TweetImageUseProps) => {
  return (
    <TweetImage src={image ? baseURL+image : ''}/>
  )
}

const TweetImage = styled.img`
`;