import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NavButton, TwitButton, Modal, ModalTwit, UserButton, UserImage } from '../../components/index';
interface props {
  isLogin: boolean;
  isModal: boolean;
  onClickHandler: any;
  width: number;
  back: boolean;
}

function Header ({ isLogin, isModal, onClickHandler, width, back }: props) {
  
  return (
    <>
      {isModal && <Modal component={<ModalTwit/>} />}
      <Container>
        <Nav>
          <NavButton link='/' text='Home' icon='' count={1}/>
          <NavButton link='/Message' text='Message' icon='' count={1}/>
          <NavButton link='/Alarm' text='Alarm' icon='' count={1}/>
          <NavButton link='/profile' text='Profile' icon='' count={1}/>
          <TwitButton onClickHandler={onClickHandler}/>
        </Nav>
        {width <= 500 && 
          <MobileHeader>
            {back ? <div>back</div> : <button>user</button>}
            
          </MobileHeader>
        }
        {width > 500 && 
          <UserButtonWrap>
            <UserButton/>
          </UserButtonWrap>
        }
      </Container>
    </>
  )
}

export default Header;

const Container: any = styled.header`
  display: flex;
  height: 53px;

  border-bottom: 1px solid #afafaf;

  @media only screen and (min-width: 500px) {
    flex-direction: column;
    justify-content: space-between;

    height: 100vh;

    padding: 0 15px;
    border: none;
  }
`;  

const Nav: any = styled.nav`
  position: fixed;
  bottom: 0;

  display:flex;
  justify-content: space-around;

  width: 100%;

  border-top: 1px solid #afafaf;
  background: white;

  @media only screen and (min-width: 500px) {
    position: relative;

    display: block;

    width: auto;

    border: none;
  }
`;

const MobileHeader = styled.div`
  display: flex;

  width: 100%;
  height: 100%;
`;

const UserButtonWrap = styled.div``;