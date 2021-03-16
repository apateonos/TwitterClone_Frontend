import React from 'react';
import styled from 'styled-components';
import { NavButton, TweetButton } from '../../index';
import { nav } from '../../../assets/images/svg';

export default () => {
  const userName = 'aglet';
  return (
    <Navigation>
      <NavButton to='/' icon={nav.home} text='Home' count={0}/>
      <NavButton to='/message' icon={nav.message} text='Message' count={0}/>
      <NavButton to={`/${userName}`} icon={nav.profile} text='Profile' count={0}/>
      <TweetButton/>
    </Navigation>
  )
}

const Navigation = styled.nav`  
  position: fixed;
  bottom: 0;
  display:flex;
  justify-content: space-around;
  width: 100%;
  padding: 0 10px;
  border-top: 1px solid ${props => props.theme.color.borderGray};
  background: white;

  @media only screen and (min-width: 500px) {
    position:relative;
    display: block;
  }
`;
