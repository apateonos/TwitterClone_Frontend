import React from 'react';
import styled from 'styled-components';

interface ExploreComponentUseProps {
  onClick: Function;
  buttonIdx: number;
}
export default ({ onClick, buttonIdx }: ExploreComponentUseProps) => {
  return (
    <Container idx={buttonIdx}>
      <Temp name='latest' onClick={(e) => onClick(e ,1)} >Latest</Temp>
      <Temp name='top' onClick={(e) => onClick(e, 2)} >Top</Temp>
      <Temp name='people' onClick={(e) => onClick(e, 3)} >People</Temp>
      <Temp name='photo' onClick={(e) => onClick(e, 4)} >Photo</Temp>
    </Container>
  )
}

interface StyledProps {
  idx: number;
}
const Container = styled.div<StyledProps>`
  position: sticky;
  z-index: 2;
  top: 50px;
  display: flex;
  width: 100%;
  height: 35px;
  background: ${props => props.theme.color.white};

  button: nth-child(${props => props.idx}) {
    border-bottom: 2px solid ${props => props.theme.color.blue};
    color: ${props => props.theme.color.blue};
  }
`;

const Temp = styled.button`
  width: 100%;
  height: 100%;
  font-weight: 700;
  border-bottom: 2px solid transparents;

  :hover {
    color: ${props => props.theme.color.blue};
    background: ${props => props.theme.color.glassBlue};
  }
`;