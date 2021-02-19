import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface props {
  isLogin: boolean;
}

function Header ({ isLogin }: props) {
  return (
    <Container>
      <Nav>
        <li><Link to = '/'>Home</Link></li>
        <li><Link to = '/message'>Message</Link></li>
        <li><Link to = '/profile'>Profile</Link></li>
      </Nav>
      <Button>Twit</Button>
    </Container>
  )
}

export default Header;

const Container: any = styled.div`
  @media only screen and (max-width: 500px) {
    position: fixed;
    bottom: 0;

    width: 100%;

    border-top: 1px solid #efcfef;
    background: white;
  }
`;

const Nav: any = styled.nav`
  display: flex;
  flex-direction: column;
  
  @media only screen and (max-width: 500px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Button: any = styled.button`
  @media only screen and (max-width: 500px) {
    position: absolute;
    top: -30px;
    right: 30px;
  }
`;