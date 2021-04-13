import React, { useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { State } from "../store/reducers/index";
import { CreateUserAccountUseData } from '../api/user';
import { createUserAccountApi } from '../store/actions/user';
import { Create } from '../components/index';

interface TweetDetailProps extends RouteComponentProps<any> {
  createUserAccountApi: ({ userUniqueName, userName, password, imageFile, profile }: CreateUserAccountUseData) => object; 
  error: any;
}

const SignContainer: React.FC<TweetDetailProps> = ({
  createUserAccountApi,
  error
}) => {
  const [ userUniqueName, setUserUniqueName ] = useState('');
  const [ userName, setUserName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ profile, setProfile ] = useState('');
  const [ userImage, setUserImage ] = useState('');
  const [ comfirmPassword, setComfirmPassword ] = useState('');
  const [ imageFile, setImageFile ] = useState('');
  const [ errorMessage, setErrorMessage ] = useState('');
  const [ errorNumber, setErrorNumber ] = useState(0);

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name } = event.currentTarget;

    switch ( name ) {
      case 'create':
        const checkVaild = verificationInputs({ userUniqueName, userName, password, comfirmPassword });

        if (checkVaild) {
          setErrorNumber(checkVaild);
          setErrorMessage(errorText[checkVaild - 3]);
          break;
        }
        createUserAccountApi({
          userUniqueName,
          userName,
          imageFile,
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
        setImageFile('');
        setUserImage('');
        break;

      default:
        break;
    }
  }

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.currentTarget as any;

    switch (name) {
      case 'userUniqueName': 
        setUserUniqueName(value);
        break;

      case 'userName': 
        setUserName(value);
        break;

      case 'password': 
        setPassword(value); 
        break;

      case 'comfirmPassword': 
        setComfirmPassword(value); 
        break;

      case 'userImage':
        const theFile = files[0];
        setImageFile(theFile);

        const reader = new FileReader();
        reader.onloadend = ( finishedEvent ) => {
          const { result } = finishedEvent.target as any;
          setUserImage( result );
        }
        reader.readAsDataURL( theFile );
        break;

      case 'profile': 
        setProfile(value) 
        break;

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
  error: rootState.userReducer.signError
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  createUserAccountApi: ({ userUniqueName, userName, password, imageFile, profile }: CreateUserAccountUseData) => {
    return dispatch(createUserAccountApi.request({ userUniqueName, userName, password, imageFile, profile }));
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