import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface props {
  to: string;
  text: string;
  count: number;
  icon: any;
}

export default ({to, icon, count, text}:props) => {
  return (
    <Link to = {to}>
      <Button>
        <IconBox>
          {icon}
          {count > 0 && <CountBox>{count}</CountBox>}
        </IconBox>
        <TextBox>{text}</TextBox>
      </Button>
    </Link>
  )
}
const Button = styled.button`
  display: flex;
  align-items: center;
  height: 50px;
  margin: 5px 0;
  padding: 10px;
  border-radius: 25px;
  background: white;

  transition-duration: 0.5s;
  :hover {
    background: ${props => props.theme.color.glassBlue};
    color: ${props => props.theme.color.blue};
    svg {
      fill: ${props => props.theme.color.blue};
    }
  }
`;

const CountBox = styled.div`
  position: absolute;
  right: -10px;
  top: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  font-size: 12px;
  font-weight: 700;
  color: white;
  border: 2px solid white;
  border-radius: 9.25px;
  background: ${props => props.theme.color.blue};
`;

const IconBox = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  padding: 2px;
`;

const TextBox = styled.span`
  font-size: 19px;
  font-weight: 600;
  margin-left: 10px;
  padding-right: 10px;

  @media only screen and (max-width: 1280px) {
    display: none;
  }
`;