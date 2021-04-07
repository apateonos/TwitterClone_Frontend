import React, { useState, useEffect } from 'react';
import { withRouter, RouteComponentProps, useHistory, useParams } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { Nav } from '../../components/index';
import { State } from '../../store/reducers/index';
import { modal } from '../../store/actions/modal';
import { ModalComponentData } from 'store/reducers/modal';
import { NavComponentUseData } from '../../components/base/nav';
import { Tweet } from '../index';

interface NavContainerUseProps extends RouteComponentProps<any> {
  openModal: ({ component }: ModalComponentData) => object; 
  loginModal: () => object;
  createAccountModal: () => object;
  self: NavComponentUseData;
}

const NavContainer: React.FC<NavContainerUseProps> = ({
  openModal,
  loginModal,
  createAccountModal,
  self
}) => {
  const isLogin = Object.keys(self).length > 0 && self.constructor === Object;
  const [ width, setWidth ] = useState(window.document.body.clientWidth); 
  const history = useHistory();
  const params = useParams();
  console.log(history.location.pathname);
  useEffect(()=> {
    window.addEventListener('resize', ()=> setWidth(window.document.body.clientWidth));
  }, [])

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = event.currentTarget;

    switch ( name ) {
      case 'login':
        loginModal()
        break;

      case 'create':
        createAccountModal()
        break;

      case 'tweet':
        openModal({ component: <Tweet/>})
        break;

      default:
        break;
    }
  };

  return (
    <Nav 
      onClick={onClickHandler}
      isLogin={isLogin}
      width={width} 
      self={self}
    />
  )
}

const mapStateToProps = (rootState: State) => ({
  self: rootState.userReducer.self
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  openModal: ({ component }: ModalComponentData) => {
    return dispatch(modal.open({ component }));
  },
  loginModal: () => {
    return dispatch(modal.loginAccount());
  },
  createAccountModal: () => {
    return dispatch(modal.createAccount());
  }
});

export default withRouter(
  compose(connect(mapStateToProps, mapDispatchToProps))(NavContainer)
);