import React from 'react';
import styled from 'styled-components';

interface props {
  _name: string;
  _password: string;
  email: string;
  onChangeHandler: any;
  onSubmitHandler: any;
  onClickHandler: any;
  isToggle: boolean;
}

function Authorization ( {onSubmitHandler, onChangeHandler, onClickHandler, _name, _password, email, isToggle}:props ) {
  return (
    <>
      <form onSubmit = {(e: React.FormEvent<HTMLFormElement>) => {e.preventDefault(); onSubmitHandler(e)}}>
        <Input 
          type = 'text' 
          name = 'name' 
          onChange = {(e: React.FormEvent<HTMLInputElement>) => onChangeHandler(e)} 
          value = {_name}
          placeholder = 'name'  
        />          
        <Input 
          type = 'password'
          name = 'password'
          onChange = {(e: React.FormEvent<HTMLInputElement>) => onChangeHandler(e)} 
          value = {_password}
          placeholder = 'password' 
        />
        <Input type='submit' value='Login' onChange = {(e: React.FormEvent<HTMLInputElement>) => onChangeHandler(e)}/>
      </form>
      <button onClick = {(e: React.MouseEvent<HTMLButtonElement>) => onClickHandler(e)}>Sign Up</button>
      {!isToggle &&
        <form onSubmit = {(e: React.FormEvent<HTMLFormElement>) => {e.preventDefault(); onSubmitHandler(e)}}>
        <Input 
            type = 'text' 
            name = 'email' 
            onChange = {(e: React.FormEvent<HTMLInputElement>) => onChangeHandler(e)} 
            value = {email}
            placeholder = 'email'  
          />
          <Input 
            type='text' 
            name='name' 
            onChange = {(e: React.FormEvent<HTMLInputElement>) => onChangeHandler(e)} 
            value={_name}
            placeholder = 'name'   
          />
          <Input 
            type='password' 
            name='password' 
            onChange = {(e: React.FormEvent<HTMLInputElement>) => onChangeHandler(e)} 
            value={_password}
            placeholder = 'password'
          />
          <Input type='submit' value='Create Account' onChange = {(e: React.FormEvent<HTMLInputElement>) => onChangeHandler(e)}/>
        </form>
      }
    </>
  )
}

export default Authorization;

const Input: any = styled.input`
  border: 1px solid black;
`;