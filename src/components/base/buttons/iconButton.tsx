import React from 'react';
import styled from 'styled-components';

interface IconButtonUseData {
  idx: number;
  onClick: Function;
  name: string;
  color: string;
  image: any;
  count?: number;
}

export default ({ onClick, name, color, image, count, idx }: IconButtonUseData) => {
  return (
    <ToolButton onClick={(event)=> {event.stopPropagation(); onClick(event, idx)}} name={name} color={color}>
      <Icon>{image}</Icon>
      {count && <TextBox>{count}</TextBox>}
    </ToolButton>
  )
}

const COLOR_LIST: any = { // any말고 다른 방법이 있을까 찾아보자
  red: 'red',
  blue: 'blue',
  green: 'green'
}

const BACKGROUND_COLOR_LIST: any = {
  red: 'RGBA( 255, 0, 0, 0.1 )',
  blue: 'RGBA( 0, 0, 255, 0.1 )',
  green: 'RGBA( 0, 255, 0, 0.1 )'
}

interface buttonProps {
  color: string;
}
const ToolButton = styled.button<buttonProps>`
  display: flex;
  align-items: center;
  
  :hover {
    div {
      background: ${(props) => BACKGROUND_COLOR_LIST[props.color]};
    }
    svg {
      fill: ${props => COLOR_LIST[props.color]};
    }
    span {
      color: ${props => COLOR_LIST[props.color]};
    }
  }
`;

const Icon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 5px;

  transition-duration: 0.5s;
  svg{
    fill: ${props => props.theme.color.grayText};
    transition-duration: 0.5s;
  }
`;

const TextBox = styled.span`
  color: ${props => props.theme.color.grayText};
  transition-duration: 0.5s;

  @media only screen and (max-width: 300px) {
    display: none;
  }
`;
