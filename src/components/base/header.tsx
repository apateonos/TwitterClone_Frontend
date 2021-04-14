import React from 'react';
import styled from 'styled-components';

interface HeaderComponentUseProps {
  onClick: Function;
  title: string|JSX.Element;
  width: number;
  side: any;
}

export default ({ onClick, title, width, side }: HeaderComponentUseProps) => {
  return (
    <Header>
      {width < 500 && <Button>  </Button>}
      {title}
      {side &&
        <Wrap>
          {side}
        </Wrap>
      }
    </Header>
  )
}

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  background: white;
  padding: 8px 12px;
  font-size: 20px;
  font-weight: 800;
  border-bottom: 1px solid ${props => props.theme.color.borderGray};
`;

const Wrap = styled.div`
  align-items: center;
`;

const Button = styled.button`
  background: gray;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 15px;
`;