import React, { useEffect, useState } from 'react';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { State } from "../../store/reducers/index";
import Route from '../../routes/route';
import '../../assets/style/main.scss';
import { ThemeProvider } from 'styled-components';
import theme from '../../assets/style/lib/theme';
import { getTokenFromRefreshApi } from '../../store/actions/user';
import { SelfData } from 'store/reducers/user';

interface AppContainerUseProps {
  getTokenFromRefreshApi: () => object;
  isModal: boolean;
  self: SelfData
}

const AppContainer: React.FC<AppContainerUseProps> = ({
  getTokenFromRefreshApi,
  isModal,
  self
}) => {
  const [ isLogin, setLogin ] = useState(false);

  useEffect(() => {
    setLogin(self.user_id !== undefined);
  }, [self]);

  useEffect(() => {
    //getTokenFromRefreshApi();
  }, []);

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

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getTokenFromRefreshApi: () => {
    return dispatch(getTokenFromRefreshApi.request());
  }
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(AppContainer);