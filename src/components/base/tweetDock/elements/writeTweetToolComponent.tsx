import React from 'react';
import styled from 'styled-components';
import { BlueButton, IconButton } from '../../../index';
import { icon } from '../../../../assets/images/svg';

interface WriteTweetToolComponentUseProps {
  onChange: Function;
  onClick: Function;
}
export default ({onChange, onClick}: WriteTweetToolComponentUseProps) => {
  return (
    <Container>
        <IconButtonWrap>
          <IconButton
            image={icon.image}
            accept="image/jpeg, image/jpg, image/png"
            name="image"
            onChange={onChange}
            id="image_file"
          />
          <IconButton
            image={icon.gif}
            accept="image/gif"
            name="image"
            onChange={onChange}
            id="gif_file"
          />
        </IconButtonWrap>
        <ButtonWrap>
          <BlueButton onClick={onClick} text='TWEET' name='tweet' />
        </ButtonWrap>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  width: 100%;
  border-top: 1px solid ${props => props.theme.color.borderGray};
`;

const IconButtonWrap = styled.div`
  display: flex;
`;

const ButtonWrap = styled.div``;
