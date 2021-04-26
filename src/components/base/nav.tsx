import { navSVG } from '../../assets/images/svg';
import React from 'react';
import styled from 'styled-components';
import { NavButton, VersatileNavButton } from '../../atoms/buttons';

interface NavComponentUseProps {
  onClick: Function;
  isLogin: boolean;
  width: number;
  self: NavComponentUseData;
}

export interface NavComponentUseData {
  user_image: string;
  display_name: string;
  unique_name: string;
}

export default ({ onClick, isLogin, width, self }: NavComponentUseProps) => {
  return (
    <Nav>    
      <NavButton to='/home' text='Home' icon={navSVG.home} count={0}/>
      <NavButton to='/explore' text='Explore' icon={navSVG.explore} count={0}/>
      <NavButton to='/message' text='Message' icon={navSVG.message} count={0}/>
      <NavButton to='/profile' text='Profile' icon={navSVG.profile} count={0}/>
      <VersatileNavButton onClick={onClick} name='tweet' icon={navSVG.tweet} text='TWEET'/>
    </Nav>
  )
}

const Nav = styled.nav``;

