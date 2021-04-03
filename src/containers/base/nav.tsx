import React, { useState, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { Nav } from '../../components/index';
import { State } from '../../store/reducers/index';
import { modal } from '../../store/actions/modal';
import { OpenModalUseData } from 'store/actions/modal';
import { NavComponentUseData } from '../../components/base/nav';

interface NavContainerUseProps extends RouteComponentProps<any> {
  openModal: ({ component }: OpenModalUseData) => object; 
  self: NavComponentUseData;
}

const NavContainer: React.FC<NavContainerUseProps> = ({
  openModal,
  self
}) => {
  const [ width, setWidth ] = useState(window.document.body.clientWidth); 

  useEffect(()=> {
    window.addEventListener('resize', ()=> setWidth(window.document.body.clientWidth));
  }, [])

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {

  };
  return (
    <Nav 
      onClick={onClickHandler}
      width={width} 
      self={self}
    />
  )
}

const mapStateToProps = (rootState: State) => ({
  self: rootState.userReducer.self
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  openModal: ({ component }: OpenModalUseData) => {
    return dispatch(modal.open({ component }));
  }
});

export default withRouter(
  compose(connect(mapStateToProps, mapDispatchToProps))(NavContainer)
);