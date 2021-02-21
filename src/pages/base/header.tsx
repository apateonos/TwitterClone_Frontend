import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NavButton, TwitButton, Modal, ModalTwit } from '../../components/index';
interface props {
  isLogin: boolean;
  isModal: boolean;
  onClickHandler: any;
}

function Header ({ isLogin, isModal, onClickHandler }: props) {
  return (
    <>
      {isModal && <Modal component={<ModalTwit/>} />}
      <Container>
        <Nav>
          <li><Link to = '/'><NavButton text='Home' image='' count={0}/></Link></li>
          <li><Link to = '/message'><NavButton text='Message' image='' count={0} /></Link></li>
          <li><Link to = '/profile'><NavButton text='Profile' image='' count={0} /></Link></li>
        </Nav>
        <TwitButton onClickHandler={onClickHandler}/>
      </Container>
    </>
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