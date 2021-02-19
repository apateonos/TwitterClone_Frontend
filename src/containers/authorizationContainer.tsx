import React, { useEffect, useState } from 'react';
import { Authorization } from '../pages/index';

function AuthorizationContainer () {
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

  useEffect(()=>{
    console.log(email)
  },[email])
  
  return (
    <>
      <Authorization 
        inputHandler={onChangeHandler} 
        _name={name} 
        email={email} 
        _password={password}
      />
    </>
  )
}

export default AuthorizationContainer;