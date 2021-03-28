import React, { useEffect, useState } from 'react';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { State } from "../../store/reducers/index";
import Route from '../../routes/route';
import '../../assets/style/main.scss';
import { ThemeProvider } from 'styled-components';
import theme from '../../assets/style/lib/theme';
import { Modal } from '../../components/index';

interface AppContainerProps {
  isLogin: boolean;
  isModal: boolean;
}


const AppContainer: React.FC<AppContainerProps> = ({
  isLogin,
  isModal,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Route isLogin={isLogin} />
      {isModal && <Modal />}
    </ThemeProvider>
  )
}

const mapStateToProps = (rootState: State) => ({
  isLogin: rootState.userReducer.isLogin,
  isModal: rootState.modalReducer.isModal,
})

const mapDispatchToProps = () => {};

export default compose(connect(mapStateToProps, mapDispatchToProps))(AppContainer);