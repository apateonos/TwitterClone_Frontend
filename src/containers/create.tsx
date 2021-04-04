import React, { useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch, compose } from 'redux';
import { connect } from 'react-redux';
import { CreateUserAccountUseData } from '../api/user';
import { createUserAccountApi } from '../store/actions/user';
import { Create } from '../components/index';

interface TweetDetailProps extends RouteComponentProps<any> {
  createUserAccountApi: ({ userUniqueName, userName, password, imageFile, profile }: CreateUserAccountUseData) => object; 
}

const SignContainer: React.FC<TweetDetailProps> = ({
  createUserAccountApi
}) => {
  const [ userUniqueName, setUserUniqueName ] = useState('');
  const [ userName, setUserName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ profile, setProfile ] = useState('');
  const [ userImage, setUserImage ] = useState('');
  const [ comfirmPassword, setComfirmPassword ] = useState('');
  const [ imageFile, setImageFile ] = useState('');

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = event.currentTarget;
    
    switch ( name ) {
      case 'create':
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

  return (
    <Create 
      onClick={onClickHandler}
      onChange={onChangeHandler}
      userUniqueName={userUniqueName}
      userImage={userImage}
      userName={userName}
      password={password}
      comfirmPassword={comfirmPassword}
      profile={profile}
    />
  )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  createUserAccountApi: ({ userUniqueName, userName, password, imageFile, profile }: CreateUserAccountUseData) => {
    return dispatch(createUserAccountApi.request({ userUniqueName, userName, password, imageFile, profile }));
  }
});

export default withRouter(
  compose(connect(null, mapDispatchToProps))(SignContainer)
);

interface VerificationInputUseData {
  userName: string;
  userUniqueName: string;
  password: string;
  comfirmPassword: string;
}

const verificationInputs = ({ userUniqueName, userName, password, comfirmPassword }: VerificationInputUseData) => {
  if ( userUniqueName === '' ) return 'enter your ID or Email...';
  if ( userName !== undefined && userName === '' ) return 'enter your DisplayName...';
  if ( password === '' ) return 'enter your password...';
  if ( comfirmPassword !== undefined && comfirmPassword === '' ) return 'enter your comfirm password...';
  if ( comfirmPassword !== undefined && comfirmPassword !== password ) return "it's different password between comfirm password...";

  return false;
};
