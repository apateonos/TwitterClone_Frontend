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
          <Label><Link to = '/'><NavButton text='Home' icon='' count={3}/></Link></Label>
          <Label><Link to = '/message'><NavButton text='Message' icon='' count={10} /></Link></Label>
          <Label><Link to = '/profile'><NavButton text='Profile' icon='' count={0} /></Link></Label>
        </Nav>
        <TwitButton onClickHandler={onClickHandler}/>
      </Container>
    </>
  )
}

export default Header;

const Container: any = styled.div`
  position: fixed;
  bottom: 0;

  width: 100%;
  border-top: 1px solid #afafaf;
  background: white;

  @media only screen and (min-width: 500px) {
    position: relative;
  }
`;

const Nav: any = styled.nav`
  display:flex;
  justify-content: space-between;


  @media only screen and (min-width: 500px) {
    display: block;
  }
`;

const Label: any = styled.li`
`;