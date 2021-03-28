import { BlueButton, CreateAccountDock, LoginAccountDock } from '../index';
import React, { ReactNode, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store/reducers/index';

export default () => {
  const dispatch = useDispatch();
  const { component, isLogin, isCreateAccount } = useSelector((state: State) => ({
    component: state.modalReducer.component,
    isLogin: state.userReducer.isLogin,
    isCreateAccount: state.modalReducer.isCreateAccount
  }))
  console.log(isCreateAccount);
  return (
    <Container>
      <Board>
        <Headline>
          <ButtonWrap>
            <BlueButton onClick={()=>dispatch({type: "CLOSE_MODAL"})} name='modal' text='Back' />
          </ButtonWrap>
        </Headline>
        <Section>
          {isLogin ? component : isCreateAccount ? <CreateAccountDock/> : <LoginAccountDock/> }
        </Section>
      </Board>
    </Container>
  )
}

const Container = styled.div`
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100vw;
  height: 100vh;

  background: rgba(0,0,0, 0.5);
`;

const Board = styled.div`
  width: 500px;
  background: white;
  border-radius: 25px;
  overflow: hidden;

  @media only screen and (max-width: 500px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;

const Headline = styled.div`
  width: 100%;
  height: 50px;
  padding: 5px 10px;
  border-bottom: 1px solid ${props => props.theme.color.borderGray};
`;

const ButtonWrap = styled.div`
  width: 100px;
`;

const Section = styled.section`
  padding: 0 10px;
`;