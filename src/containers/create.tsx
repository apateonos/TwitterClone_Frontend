import React, { useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { State } from "../store/reducers/index";
import { CreateUserAccountUseData } from '../api/user';
import { createUserAccountApi } from '../store/actions/user';
import { Create } from '../components/index';

interface TweetDetailProps extends RouteComponentProps<any> {
  createUserAccountApi: ({ unique_name, user_name, password, user_image, profile }: CreateUserAccountUseData) => object; 
  error: any;
}

const SignContainer: React.FC<TweetDetailProps> = ({
  createUserAccountApi,
  error
}) => {
  const [ preview_image, setPreViewImage ] = useState('');
  const [ unique_name, setUniqueName ] = useState('');
  const [ user_name, setUserName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ comfirm_password, setComfirmPassword ] = useState('');
  const [ profile, setProfile ] = useState('');
  const [ user_image, setUserImage ] = useState('');
  
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name } = event.currentTarget;

    switch ( name ) {
      case 'create':
        createUserAccountApi({
          unique_name,
          user_name,
          user_image,
          password,
          profile
        })
        break;

      default:
        break;
    }
  }

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = event.currentTarget;
    
    switch ( name ) {
      case 'imageCancel':
        break;

      default:
        break;
    }
  }

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.currentTarget as any;

    switch (name) {
      case 'uniqueName': 
        return setUniqueName(value);
        
      case 'userName': 
        return setUserName(value);
        
      case 'password': 
        return setPassword(value); 
        
      case 'comfirmPassword': 
        return setComfirmPassword(value); 
        
      case 'profile': 
        return setProfile(value);
         
      case 'userImage':
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = ( finishedEvent ) => {
          const { result } = finishedEvent.target as any;
          setUserImage( result );
        }
        return reader.readAsDataURL( theFile );
        
      default:
        break;
    }
  }

  const errorCode = (error: string) => {
    switch (error) {
      case 'ER_INVAILD_UNIQUENAME':
        return 3;
      case 'ER_INVAILD_USERNAME':
        return 4;
      case 'ER_INVAILD_PASSWORD':
        return 5;

      default:
        return 0;
    }
  }

  return (
    <Create 
      onSubmit={onSubmitHandler}
      onClick={onClickHandler}
      onChange={onChangeHandler}
      userUniqueName={userUniqueName}
      userImage={userImage}
      userName={userName}
      password={password}
      comfirmPassword={comfirmPassword}
      profile={profile}
      error={error !== '' ? errorCode(error.code) : errorNumber}
      message={error !== '' ? error.message : errorMessage}
    />
  )
}

const mapStateToProps = (rootState: State) => ({
  //error: rootState.userReducer.signError
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  createUserAccountApi: ({ unique_name, user_name, password, user_image, profile }: CreateUserAccountUseData) => {
    return dispatch(createUserAccountApi.request({ unique_name, user_name, password, user_image, profile }));
  }
});

export default withRouter(
  compose(connect(mapStateToProps, mapDispatchToProps))(SignContainer)
);

interface VerificationInputUseData {
  userName: string;
  userUniqueName: string;
  password: string;
  comfirmPassword: string;
}

const verificationInputs = ({ userUniqueName, userName, password, comfirmPassword }: VerificationInputUseData) => {
  if ( userUniqueName.length < 4 ) return 3;
  if ( userName.length < 4 ) return 4;
  if ( password.length < 4 ) return 5;
  if ( comfirmPassword.length < 4 ) return 6;
  if ( comfirmPassword !== password ) return 6;
  return false;
};

const errorText = [
  'unique name must be at least 4 characters long.',
  'display name must be at least 4 characters long.',
  'password must be at least 4 characters long.',
  'enter comfirm password.',
  "it's different password between comfirm password"
]