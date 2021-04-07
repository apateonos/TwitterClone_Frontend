import React, { useState, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { Header } from '../../components/index';
import { State } from '../../store/reducers/index';

interface HeaderContainerUseProps extends RouteComponentProps<any> {
  self: {};
  title: JSX.Element | string;
}
const HeaderContainer: React.FC<HeaderContainerUseProps> = ({ 
  self,
  title
}) => {
  const [ width, setWidth ] = useState(window.document.body.clientWidth);

  useEffect(()=> {
    window.addEventListener('resize', ()=> setWidth(window.document.body.clientWidth))
  },[])

  const onClickHandler = () => {
    
  }

  return (
    <Header
      width={width}
      onClick={onClickHandler}
      title={title}
    />
  )
}

const mapStateToProps = (rootState: State) => ({
  self: rootState.userReducer.self
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
});
export default withRouter(
  compose(connect(mapStateToProps, mapDispatchToProps))(HeaderContainer)
);
