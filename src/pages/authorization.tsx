import React from 'react';
import styled from 'styled-components';

interface props {
  _name: string;
  _password: string;
  email: string;
}

function Authorization ({inputHandler, _name, _password, email}:props) {
  return (
    <>
      <form>
        <Input 
          type='text' 
          name='name' 
          onChange = {(e: React.FormEvent<HTMLInputElement>) => inputHandler(e)} 
          value={_name} />
        <Input 
          type='password' 
          name='password' 
          onChange = {(e: React.FormEvent<HTMLInputElement>) => inputHandler(e)} 
          value={_password}
        />
        <Input type='button' value='Login' onChange = {(e: React.FormEvent<HTMLInputElement>) => inputHandler(e)}/>
      </form>
      <div>{email}</div>
    </>
  )
}

export default Authorization;

const Input: any = styled.input`
  border: 1px solid black;
`;