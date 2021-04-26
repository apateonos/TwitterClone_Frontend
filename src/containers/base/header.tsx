import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Header } from '../../components/index';
import { State } from '../../store/reducers/index';

interface HeaderContainerUseProps extends RouteComponentProps<any> {
  title: string;
}
const HeaderContainer: React.FC<HeaderContainerUseProps> = ({ 
  title,
}) => {
  return (
    <Header title={title}/>
  )
}

const mapStateToProps = (rootState: State) => ({
  self: rootState.userReducer.self
})

export default withRouter(
  compose(connect(mapStateToProps, null))(HeaderContainer)
);
