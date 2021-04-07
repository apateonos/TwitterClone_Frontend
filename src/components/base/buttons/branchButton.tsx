import React, { useState } from 'react';
import styled from 'styled-components';
import { branchButtonIcon } from '../../../assets/images/svg';

interface MoreVertUseProps {
  onClick: Function;
  list: Array<string>;
  idx: number;
}
export default () => {
  const [ isVert, setIsVert ] = useState(false);
  return (
    <Container>
      {isVert && 
        <>
          <BranchBox>
            <Branch>asdmlsd</Branch>
            <Branch>asmdlasme</Branch>
          </BranchBox>
          <OnBranchBackground 
            onClick={(event) => {event.stopPropagation(); setIsVert(false)}}
          ></OnBranchBackground>
        </>
      }
      <Button onClick={(event)=>{event.stopPropagation(); setIsVert(true);}}>{branchButtonIcon}</Button>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;

  :hover {
    background: ${props => props.theme.color.glassBlue};
  }
`;

const BranchBox = styled.div`
  position: absolute;
  right: 0;
  z-index: 9999;
  shadow: 5px;
  background: ${props => props.theme.color.white};
  box-shadow: 0px 0px 20px ${props => props.theme.color.borderGray};

  div: last-child {
    border-bottom: none;
  }
`;

const Branch = styled.div`
  padding: 8px 15px;

  transition-duration: 0.6s;
  :hover {
    background: ${props => props.theme.color.borderBackgroundGray};
  }
`;

const OnBranchBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 2;
`;