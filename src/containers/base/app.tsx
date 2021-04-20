import React, { useEffect, useState } from 'react';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { State } from "../../store/reducers/index";
import Route from '../../routes/route';
import '../../assets/style/main.scss';
import { ThemeProvider } from 'styled-components';
import theme from '../../assets/style/lib/theme';
import { getTokenFromRefreshApi } from '../../store/actions/user';

interface AppContainerProps {
  getTokenFromRefreshApi: () => object;
  self: any;
  isModal: boolean;
}

const AppContainer: React.FC<AppContainerProps> = ({
  getTokenFromRefreshApi,
  self,
  isModal,
}) => {
  const [ isLogin, setIsLogin ] = useState(false);

  useEffect(() => {
    const loginCheck = Object.keys(self).length > 0 && self.constructor === Object;
    setIsLogin(loginCheck);
    if (!loginCheck) { 
      getTokenFromRefreshApi();
    }
  }, [self]);

  return (
    <ThemeProvider theme={theme}> 
      <Route 
        isLogin={isLogin} 
        isModal={isModal} 
      /> 
    </ThemeProvider> 
  )
}

const mapStateToProps = (rootState: State) => ({
  self: rootState.userReducer.self,
  isModal: rootState.modalReducer.isModal,
})

const mapDispatchToProps = () => ({
  getTokenFromRefreshApi: (dispatch: Dispatch) => {
    return dispatch(getTokenFromRefreshApi.request());
  }
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(AppContainer);