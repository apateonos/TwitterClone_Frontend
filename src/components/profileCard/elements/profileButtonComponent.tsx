import React from 'react';
import styled from 'styled-components';
import { WhiteButton } from '../../index';

interface ProfileButtonComponentUseProps {
  onClick: Function;
  selfNumber: number;
  userNumber: number;
  isFollow: number;
}

export default ({ onClick, selfNumber, userNumber, isFollow }: ProfileButtonComponentUseProps) => {
  return (
    <Container>
      <ButtonWrap>
        {
          selfNumber === userNumber
          ? <WhiteButton name='setting' onClick={onClick} text='Setting'/>              
          : isFollow === 1
          ? <WhiteButton name='unfollow' onClick={onClick} text='Unfollow'/> 
          : <WhiteButton name='follow' onClick={onClick} text='Follow'/>
        }
      </ButtonWrap>
    </Container>
  )
}


const Container = styled.div`
  display:flex;
  justify-content: flex-end;
`;

const ButtonWrap = styled.div`
  width: 120px;
  padding: 10px;
`;