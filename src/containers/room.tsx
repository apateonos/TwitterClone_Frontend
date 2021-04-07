import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { State } from "../store/reducers/index";

interface RoomContainerProps extends RouteComponentProps<any> {

}

const RoomContainer: React.FC<RoomContainerProps> = ({

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
  compose(connect(mapStateToProps, mapDispatchToProps))(RoomContainer)
);
