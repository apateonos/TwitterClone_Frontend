import React from 'react';
import styled from 'styled-components';

interface HeaderComponentUseProps {
  onClick: Function;
  title: string;
}

export default ({ onClick, title }: HeaderComponentUseProps) => {
  return (
    <Container>
    </Container>
  ) 
}

const Container = styled.div`
  width: 100%;
  height: 50px;
  background: white;
  border-bottom: 1px solid ${props => props.theme.color.borderGray};
`;