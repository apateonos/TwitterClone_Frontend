import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import { CommonButton, EmphasisButton } from '../atoms/buttons';
import { InfoInput } from '../atoms/inputs';

interface LoginUseProps {
  onChange: Function;
  onSubmit: Function;
  onClick: Function;
  state: any;
}

export default ({ onChange, onSubmit, onClick, state }: LoginUseProps) => {
  const { unique_name, password } = state;
  const temp = () => {
    console.log('temp');
    axios.get('https://agtwitter.tk/ping')
  }
  return (
    <>
      <button onClick={() => temp()}>버튼!</button>
      <form name='login' onSubmit={(e) => onSubmit(e)} >
        <InfoInput name='unique_name' onChange={onChange} type='text' value={unique_name} placeholder='ID...' />
        <InfoInput name='password' onChange={onChange} type='password' value={password} placeholder='Password...' />
        <div>
          <CommonButton name='login' type='submit' text='Login' />
          <EmphasisButton name='create' onClick={onClick} text='Create' />
        </div>
      </form>
    </>
  )
}