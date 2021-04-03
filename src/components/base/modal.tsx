import { BlueButton } from '../index';
import { Create, Login } from '../../containers/index';
import React from 'react';
import styled from 'styled-components';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store/reducers/index';
import { modal } from '../../store/actions/modal';

interface ModalComponentUseProps {
  closeModal: () => object;
  component: JSX.Element;
  isCreateAccount: boolean;
  self: {};
}

const ModalComponent: React.FC<ModalComponentUseProps> = ({
  closeModal,
  component,
  isCreateAccount,
  self
}) => {
  const isLogin = Object.keys(self).length === 0 && self.constructor === Object;

  return (
    <Container>
      <Board>
        <Headline>
          <ButtonWrap>
            <BlueButton onClick={()=>closeModal()} name='modal' text='Back' />
          </ButtonWrap>
        </Headline>
        <Section>
          {isLogin ? component : isCreateAccount ? <Create /> : <Login /> }
        </Section>
      </Board>
    </Container>
  )
}

const mapStateToProps = (rootState: State) => ({
  component: rootState.modalReducer.component,
  isCreateAccount: rootState.modalReducer.isCreateAccount,
  self: rootState.userReducer.self
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  closeModal: () => {
    return dispatch(modal.close());
  }
});

export default withRouter(
  compose(connect(mapStateToProps, mapDispatchToProps))(ModalComponent)
);

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