import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NavButton, TwitButton, Modal, ModalTwit, UserButton, UserImage, SideBar } from '../../components/index';
interface props {
  isLogin: boolean;
  isModal: boolean;
  isSideBar: boolean;
  onClickHandler: any;
  onClickToggle: any;
  width: number;
  back: boolean;
  title: string;
}

function Header ({ isLogin, isModal, isSideBar, onClickToggle, width, back, title }: props) {
  
  return (
    <Container>
        <Nav>
          <NavButton link='/' text='Home' icon='' count={1}/>
          <NavButton link='/Message' text='Message' icon='' count={1}/>
          <NavButton link='/Alarm' text='Alarm' icon='' count={1}/>
          <NavButton link='/profile' text='Profile' icon='' count={1}/>
          <TwitButton onClickHandler={onClickToggle}/>
        </Nav>
        {width <= 500 && 
          <MobileHeaderWrap>
            <MobileHeader>
            <LeftButtonBox>
              {back ? <div onClick={()=>onClickToggle('sideBar')}>back</div> : <button>user</button>}
            </LeftButtonBox>
            <TitleBox>
              {title}
            </TitleBox>
            <RightButtonBox>

            </RightButtonBox>
          </MobileHeader>
          </MobileHeaderWrap>
        }
        {width > 500 && 
          <UserButtonWrap>
            <UserButton/>
          </UserButtonWrap>
        }
        {width <= 500 && isSideBar && <SideBar displayFunc={onClickToggle} display={isSideBar}/>}
        {isModal && <Modal component={<ModalTwit/>} />}
      </Container>
  )
}

export default Header;
 
const Container: any = styled.header`
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
    display: block;
    top: 0;

    width: auto;

    border: none;
  }
`;

const MobileHeaderWrap = styled.div`
  height: 53px;
`;

const MobileHeader = styled.div`
  position: fixed;
  top: 0;

  display: flex;

  width: 100%;
  height: 53px;
  border-bottom: 1px solid #cfcfcf;
  background: white;
`;

const UserButtonWrap = styled.div``;

const LeftButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 53px;
  height: 53px;
`;

const RightButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  min-width: 53px;
  height: 53px;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  
  padding: 10px;
  
  font-size: 19px;
  font-weight: 800;
`;