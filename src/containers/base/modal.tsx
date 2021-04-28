import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { State } from '../../store/reducers/index';
import { Modal } from '../../components/index';

interface ModalContainerUseProps extends RouteComponentProps {
  component: JSX.Element;
}

const ModalComponent: React.FC<ModalContainerUseProps> = ({
  component
}) => {

  return (
    <Modal
      component={component}
    />
  );
}

const mapStateToProps = (rootState: State) => ({
  component: rootState.modalReducer.component,
})

export default withRouter(
  compose(connect(mapStateToProps))(ModalComponent));
