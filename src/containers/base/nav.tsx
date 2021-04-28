import React, { useState, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { State } from '../../store/reducers/index';
import { SelfData } from '../../store/reducers/user';
import { Nav } from '../../components/index';

interface NavContainerUseProps extends RouteComponentProps<any> {
  self: SelfData;
}

const NavContainer: React.FC<NavContainerUseProps> = ({
  self
}) => {

  return (
    <Nav 
      self={self}
    />
  )
}

const mapStateToProps = (rootState: State) => ({
  self: rootState.userReducer.self
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
});


export default withRouter(
  compose(connect(mapStateToProps, mapDispatchToProps))(NavContainer)
);