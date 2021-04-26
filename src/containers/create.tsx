import React from 'react';
import { useChange, useSubmit, useClick } from '../handler/index';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { State } from "../store/reducers/index";
import { Create } from '../components/index';

interface CreateContainerUseProps extends RouteComponentProps<any> {
  error: any;
}

const initialState = {unique_name: '', user_name: '', password: '', password_: '', profile: '', preview_image: '', imageFile: ''};
const CreateContainer: React.FC<CreateContainerUseProps> = ({
  error
}) => {
  const [ state, onChangeHandler ] = useChange(initialState);
  const onSubmitHandler = useSubmit(state);
  const onClickHandler = useClick();

  return (
    <Create
      onChange={onChangeHandler}
      onClick={onClickHandler}
      onSubmit={onSubmitHandler}
      state={state}
    />
  )
}

const mapStateToProps = (rootState: State) => ({
  error: rootState.userReducer.error
})

export default withRouter(
  compose(connect(mapStateToProps))(CreateContainer)
);