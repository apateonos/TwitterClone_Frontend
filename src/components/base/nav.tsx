import React from 'react';
import styled from 'styled-components';
import { NavButton, TweetButton, Setting } from '../index';
import { nav } from '../../assets/images/svg';

interface NavComponentUseProps {
  onClick: Function;
  width: number;
  self: NavComponentUseData;
}

export interface NavComponentUseData {
  userImage: string;
  userName: string;
  userUniqueName: string;
}

export default ({ onClick, width, self }: NavComponentUseProps) => {
  const { userUniqueName } = self;
  return (
    <Nav>
      <ButtonWrap>
        <NavButton to='/' icon={nav.home} text='Home' count={0}/>
        <NavButton to='/message' icon={nav.message} text='Message' count={0}/>
        <NavButton to={`/${userUniqueName}`} icon={nav.profile} text='Profile' count={0}/>
        <TweetButton onClick={onClick} name='tweet' />
      </ButtonWrap>
      {width > 500 && <Setting self={self} />}
    </Nav>
  )
}
const Nav = styled.nav`  
  width: auto;

  @media only screen and (min-width: 500px) {
    min-width: 70px;
  }

  @media only screen and (min-width: 1280px) {
    width: 270px;
}
`;

const ButtonWrap = styled.div`
  z-index: 1;
  bottom: 0;
  position: fixed;
  display:flex;
  justify-content: space-around;
  width: 100%;
  padding: 0 10px;
  border-top: 1px solid ${props => props.theme.color.borderGray};
  background: white;

  @media only screen and (min-width: 500px) {
    border-top: none;
    bottom: auto;
    width: auto;
    display: block;
  }
`;
