import React, { useState } from 'react';
import { Authorization } from '../pages/index';

function AuthorizationContainer ({}) {
  const [ isCreateAccout, setIsCreateAccout ] = useState(true);
  const [ name, setName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');

  const onChangeHandler = (e: { target: HTMLInputElement}) => {
    let val: string = e.target.value;
    let name: string = e.target.name;

    if( name === 'name' ) {
      setName(val);
    }
    else if ( name === 'password' ) {
      setPassword(val);
    }
    else if ( name === 'email' ) {
      setEmail(val);
    }
  }

  const onSubmitHandler = (e: { target: HTMLFormElement}) => {    
    if (isCreateAccout) {

    } else {

    }
  }

  const onClickHandler = (e: { target: HTMLButtonElement}) => {
    setIsCreateAccout(prev => !prev);
  }

  return (
    <>
      <Authorization 
        onChangeHandler = {onChangeHandler}
        onSubmitHandler = {onSubmitHandler}
        onClickHandler = {onClickHandler}
        _name = {name} 
        email = {email} 
        _password = {password}
        isToggle = {isCreateAccout}
      />
    </>
  )
}

export default AuthorizationContainer;