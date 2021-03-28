import React from 'react';
import styled from 'styled-components';
import { NavButton, TweetButton } from './index';
import { nav } from '../../../assets/images/svg';

interface NavigationComponentUseData {
  self: SelfProps;
}

interface SelfProps {
  userUniqueName: string;
}

export default ({ self }: NavigationComponentUseData) => {
  const { userUniqueName } = self;

  return (
    <Container>
      <NavButton to='/' icon={nav.home} text='Home' count={0}/>
      <NavButton to='/message' icon={nav.message} text='Message' count={0}/>
      <NavButton to={`/${userUniqueName}`} icon={nav.profile} text='Profile' count={0}/>
      <TweetButton/>
    </Container>
  )
}

const Container = styled.div`
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
