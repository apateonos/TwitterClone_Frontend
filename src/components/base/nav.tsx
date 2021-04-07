import React from 'react';
import styled from 'styled-components';
import { NavButton, TweetButton, Setting, BlueButton, WhiteButton } from '../index';
import { mainLogo, nav } from '../../assets/images/svg';

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
  const { unique_name } = self;
  return (
    <Nav>    
      {width > 500 &&
        <MainLogoWrap>
          <MainLogo>{mainLogo}</MainLogo>
        </MainLogoWrap>
      }
      {isLogin &&
        <ButtonWrap >
          <NavButton to='/' icon={nav.home} text='Home' count={0}/>
          <NavButton to='/explore' icon={nav.explore} text='Explore' count={0}/>
          <NavButton to='/message' icon={nav.message} text='Message' count={0}/>
          <NavButton to={`/profile/${unique_name}`} icon={nav.profile} text='Profile' count={0}/>
          <TweetButton onClick={onClick} name='tweet' />
          {width > 500 && <Setting self={self} />}
        </ButtonWrap>
      }
      {!isLogin && width > 500 &&
        <UnloginButtonWrap >
          <NavButton to='/explore' icon={nav.explore} text='Explore' count={0}/>
        </UnloginButtonWrap>
      }
      {!isLogin &&
        <LoginWrap>
          {width > 500 && 
            <LoginTextWrap>
              <LoginText>What a miss you</LoginText>
              <LoginSmallText>이 사이트는 실제 트위터가 아닙니다.</LoginSmallText>
            </LoginTextWrap>
            
          }
          <LoginButtonWrap>
            <BlueButton onClick={onClick} name='login' text='Log in'/>
            <WhiteButton onClick={onClick} name='create' text='sign up'/>
          </LoginButtonWrap>         
        </LoginWrap>
      }
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

const MainLogoWrap = styled.div`
  margin-top: 15px;
  height: 50px;
  padding: 0 15px;
`;

const MainLogo = styled.div`
  position: fixed;
  svg {
    fill: red;
    width: 40px;
  }
`;

const ButtonWrap = styled.div`
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

const UnloginButtonWrap = styled.div`
  position: fixed;
  padding: 0 10px;
`;

const LoginWrap = styled.div`
  bottom: 0;
  left: 0;
  z-index: 2;
  position: fixed;
  display:flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 10px;
  border-top: 1px solid ${props => props.theme.color.borderGray};
  background: ${props => props.theme.color.blue};
  padding: 10px 0 ;
`;

const LoginText = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: ${props => props.theme.color.white};
  margin-right: 15px;
`;

const LoginTextWrap = styled.div`
  text-align: center;
`;

const LoginButtonWrap = styled.div`
  display: flex;
  width: 300px;
  button: first-child {
    margin-right: 10px;
  }
`;

const LoginSmallText = styled.p`
  color: white;
  font-size: 13px;
`;

