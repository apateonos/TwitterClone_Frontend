import React from 'react';
import styled from 'styled-components';
import { CancelButton, ImageComponent } from '../../../index';

interface TweetImageComponentUseProps {
  onClick: Function;
  tweetImage: string;
}

export default ({ onClick, tweetImage }: TweetImageComponentUseProps ) => {
  return (
    <Container>
      <ButtonWrap>
        <CancelButton onClick={onClick} /> 
      </ButtonWrap>
      <ImageComponent image={tweetImage} />
    </Container>
  )
}

const Container = styled.div`
  position:relative;
  margin-bottom: 10px;
`;

const ButtonWrap = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;