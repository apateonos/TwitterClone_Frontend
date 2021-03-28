import React from 'react';
import styled from 'styled-components';
import { SelectedTweetUseData } from '../selectedTweetCard';

interface ToolButtonComponentUseProps {
  onClick: Function;
  props: SelectedTweetUseData;
}

export default ({ onClick, props }: ToolButtonComponentUseProps) => {
  return (
    <Container>
      
    </Container>
  )
}

const Container = styled.div`
  border-top: 1px solid ${props => props.theme.color.borderGray};
  height: 30px;
`;