import { navSVG } from '../../assets/images/svg';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavButton, VersatileNavButton } from '../../atoms/buttons';
import { SelfData } from '../../store/reducers/user';

interface NavComponentUseProps {
  self: SelfData;
}

export interface NavComponentUseData {
  user_image: string;
  display_name: string;
  unique_name: string;
}
const initialState = { isLogin: false };
export default ({ self }: NavComponentUseProps) => {
  const [ state, inputState ] = useState(initialState);
  useEffect(() => {
    const isLogin = self.user_id !== undefined;
    inputState({ ...state, isLogin });
  }, [self]);
  return (
    <Nav> 
      {state.isLogin ?
        <>
          <NavButton to='/' text='Home' icon={navSVG.home} count={0}/>
          <NavButton to='/explore' text='Explore' icon={navSVG.explore} count={0}/>
          <NavButton to='/message' text='Message' icon={navSVG.message} count={0}/>
          <NavButton to={`/profile/${self.unique_name}`} text='Profile' icon={navSVG.profile} count={0}/>
          <VersatileNavButton name='tweet' icon={navSVG.tweet} text='TWEET'/>
        </>
        : <>
          <NavButton to='/explore' text='Explore' icon={navSVG.explore} count={0}/>
        </>
      }
    </Nav>
  )
}

const Nav = styled.nav``;

