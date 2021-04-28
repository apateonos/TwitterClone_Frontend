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
    <Link to={to} >
      <Container>
        <IconBox>
          {icon}
          {count > 0 && <CountBox>{count}</CountBox>}
        </IconBox>
        <TextBox>{text}</TextBox>
      </Container>
    </Link>
  )
}
const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;

  font-size: 20px;
  font-weight: 700;
  padding: 7px 15px;
  border-radius: 1.5em;

  transition-duration: 0.4s;
  :hover {
    background: #efefef;
  }

  @media only screen and ( min-width: 768px ) {
    width: auto;
    margin-bottom: 8px;
  }
`;

const CountBox = styled.div`
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 30px;
    height: 30px;
  }
`;

const TextBox = styled.span`
  display: none;
  margin-left: 9px;

  @media only screen and ( min-width: 768px ) {
    display: block;
  }
`;