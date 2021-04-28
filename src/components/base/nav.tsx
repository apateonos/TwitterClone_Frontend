import { navSVG } from '../../assets/images/svg';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CommonButton, EmphasisButton, NavButton, VersatileNavButton } from '../../atoms/buttons';
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
    <>
      <Nav> 
        {state.isLogin ?
          <>
            <NavButton to='/' text='Home' icon={navSVG.home} count={0}/>
            <NavButton to='/explore' text='Explore' icon={navSVG.explore} count={0}/>
            <NavButton to='/message' text='Message' icon={navSVG.message} count={0}/>
            <NavButton to={`/profile/${self.unique_name}`} text='Profile' icon={navSVG.profile} count={0}/>
            <VersatileNavButtonWrap>
              <VersatileNavButton name='tweet' icon={navSVG.tweet} text='TWEET'/>
            </VersatileNavButtonWrap>
          </>
          : <NavButton to='/explore' text='Explore' icon={navSVG.explore} count={0}/>          
        }
      </Nav>
      {!state.isLogin && 
        <LoginNavWrap>
          <ButtonWrap>
            <CommonButton name='login' text='Login' />
            <EmphasisButton name='create' text='Sign' />
          </ButtonWrap>
        </LoginNavWrap>
      }
    </>
  )
}

const Nav = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-around;
  width: 100%;
  border-top: 1px solid black;
  bottom: 0;
  padding: 5px 3px;
  background: white;

  @media only screen and ( min-width: 550px ) {
    position: sticky;
    top: 0; 
    height: 100%;
    display: block;
    width: auto;
    border-top: none;
  }
`;

const VersatileNavButtonWrap = styled.div`
  position: fixed;
  bottom: 80px;
  right: 15px;

  @media only screen and ( min-width: 550px ) {
    position: static;
  }
`;
const LoginNavWrap = styled.div`
  position: fixed;
  z-index: 10;
  display: flex;
  bottom: 0;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 60px;
  background: black;
`;

const ButtonWrap = styled.div` 
  display: flex;
  height: 50px;
`;