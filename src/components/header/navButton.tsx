import React from 'react';
import styled from 'styled-components';

interface props {
  text: string;
  count: number;
  icon: any;
}

const NavButton = ({icon, count, text}:props ) => {
  return (
    <Container>
      <IconBox>
        {icon}
        {count > 0 && <CountBox>{count}</CountBox>}
      </IconBox>
      <TextBox>{text}</TextBox>
    </Container>
  )
}

export default NavButton;

const Container = styled.button`
  display: flex;
  align-items: center;
  
  height: 50px;

  margin: 5px 0;
  padding: 15px;

  border-radius: 25px;
  background: white;

  transition-duration: 0.5s;
  :hover {
    background: #1da1f21a;
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
  background: #39a1f1;
`;

const IconBox = styled.div`
  position: relative;

  width: 24px;
  height: 24px;

  padding: 2px;

  background: black;
`;

const TextBox = styled.span`
  font-size: 19px;
  font-weight: 600;

  margin-left: 10px;

  @media only screen and (max-width: 1280px) {
    display: none;
  }
`;