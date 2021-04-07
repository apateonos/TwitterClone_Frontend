import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { State } from "../store/reducers/index";

interface MessageContainerProps extends RouteComponentProps<any> {

}

const MessageContainer: React.FC<MessageContainerProps> = ({

}) => {
  
  return (
    <>

    </>
  )
}

const mapStateToProps = (rootState: State) => ({
  
})

const mapDispatchToProps = (dispatch: Dispatch) => ({

});

export default withRouter(
  compose(connect(mapStateToProps, mapDispatchToProps))(MessageContainer)
);
