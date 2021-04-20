import React, { useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { State } from "../store/reducers/index";
import { LoginUserAccountUseData } from 'api/user';
import { loginUserAccountApi } from '../store/actions/user';
import { modal } from '../store/actions/modal';
import { Create } from './index';
import { Login } from '../components/index';

interface LoginContainerUseProps extends RouteComponentProps<any> {
  loginUserAccountApi: ({ unique_name, password }: LoginUserAccountUseData) => object;
  openModal: () => object;
  error: any;
}

const LoginContainer: React.FC<LoginContainerUseProps> = ({
  loginUserAccountApi,
  openModal,
  error
}) => {
  const [ unique_name, setUniqueName ] = useState('');
  const [ password, setPassword ] = useState('');

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name } = event.currentTarget;

    switch (name) {
      case 'login':
        return loginUserAccountApi({ unique_name, password });

      default:
        break;
    }
  }

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = event.currentTarget;
    switch (name) {
      case 'create':
        return openModal(<Create />);

      default:
        break;
    }
  }

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case 'uniqueName': 
        return setUniqueName(value);
        
      case 'password': 
        return setPassword(value); 

      default:
        break;
    }
  }

  return (
    <></>
  )
}

const mapStateToProps = (rootState: State) => ({
  error: rootState.userReducer.error
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loginUserAccountApi: ({ unique_name, password }: LoginUserAccountUseData) => {
    return dispatch(loginUserAccountApi.request({ unique_name, password }));
  },
  
  openModal: (component: JSX.Element) => {
    return dispatch(modal.open(component));
  }
});

export default withRouter(
  compose(connect(mapStateToProps, mapDispatchToProps))(LoginContainer)
);
  
const errorCode = (error: string) => {
  switch (error) {
    case 'ER_INVAILD_UNIQUENAME':
      return 2;
    case 'ER_INVAILD_PASSWORD':
      return 3;
    default:
      return 0;
  }
}