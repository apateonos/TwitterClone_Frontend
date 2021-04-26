import React from 'react';
import styled from 'styled-components';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { State } from '../../store/reducers/index';
import { Modal } from '../../components/index';
import { useClick } from '../../handler/index';

interface ModalContainerUseProps extends RouteComponentProps {
  component: JSX.Element;
}

const ModalComponent: React.FC<ModalContainerUseProps> = ({
  component
}) => {
  const onClickHandler = useClick();

  return (
    <Modal
      onClick={onClickHandler}
      component={component}
    />
  );
}

const mapStateToProps = (rootState: State) => ({
  component: rootState.modalReducer.component,
})

export default withRouter(
  compose(connect(mapStateToProps))(ModalComponent));
