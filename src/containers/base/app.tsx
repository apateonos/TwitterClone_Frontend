import React, { useEffect, useState } from 'react';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { State } from "../../store/reducers/index";
import { checkUserAccountApi } from '../../store/actions/user';
import Route from '../../routes/route';
import '../../assets/style/main.scss';
import { ThemeProvider } from 'styled-components';
import theme from '../../assets/style/lib/theme';

interface AppContainerProps {
  checkUserAccountApi: ()=> object;
  login: boolean;
}

const AppContainer: React.FC<AppContainerProps> = ({
  checkUserAccountApi,
  login, 
}) => {

  useEffect(() => {
    if( !login ) {
      //checkUserAccountApi();
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Route login={login} />
    </ThemeProvider>
  )
}

const mapStateToProps = (rootState: State) => ({
  login: rootState.userReducer.login,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  checkUserAccountApi: () => {
    return dispatch(checkUserAccountApi.request());
  }
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(AppContainer);