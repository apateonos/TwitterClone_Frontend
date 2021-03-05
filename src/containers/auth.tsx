import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Auth } from '../pages/index';

export default () => {
  const [ userEmail, setUserEmail ] = useState('');
  const [ userName, setUserName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ profile, setProfile ] = useState('');
  const [ checkPassword, setCheckPassword ] = useState('');
  const [ errorMessage, setErrorMessage ] = useState('');
  
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    switch (name) {
      case 'userEmail': setUserEmail(value) 
        break;
      case 'userName': setUserName(value) 
        break;
      case 'password': setPassword(value) 
        break;
      case 'checkPassword': setCheckPassword(value) 
        break;
      case 'profile': setProfile(value) 
        break;
    }
  }

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name } = event.currentTarget;

    switch (name) {
      case 'loginAccount':
        if(userEmail === '') {
          setErrorMessage('Please enter your email')
          break;
        }
        if(password === '') {
          setErrorMessage('Please enter your password')
          break;
        }
        console.log('you done!')
        break;

      case 'createAccount':
        if(userEmail === '') {
          setErrorMessage('Please enter your email')
          break;
        }
        if(userName === '') {
          setErrorMessage('Please enter your name')
          break;
        }
        if(password === '') {
          setErrorMessage('Please enter your password')
          break;
        }
        if(checkPassword === '') {
          setErrorMessage('Please enter your password checked')
          break;
        }
        if(checkPassword !== password) {
          setErrorMessage('password is different from password checked')
          break;
        }
        break;
    }
  }

  return (
    <Auth
      onChange={onChangeHandler}
      onSubmit={onSubmitHandler}
      userEmail={userEmail}
      userName={userName}
      profile={profile}
      password={password}
      checkPassword={checkPassword}
      errorMessage={errorMessage}
    />
  )
}
