import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import { CommonButton, EmphasisButton } from '../atoms/buttons';
import { InfoInput } from '../atoms/inputs';

interface LoginUseProps {
  onChange: Function;
  onSubmit: Function;
  state: any;
}

export default ({ onChange, onSubmit, state }: LoginUseProps) => {
  const { unique_name, password } = state;

  return (
    <form name='login' onSubmit={(e) => onSubmit(e)} >
      <InfoInput name='unique_name' onChange={onChange} type='text' value={unique_name} placeholder='ID...' />
      <InfoInput name='password' onChange={onChange} type='password' value={password} placeholder='Password...' />
      <ButtonWrap>
        <CommonButton name='login' type='submit' text='Login' />
        <EmphasisButton name='create' text='Create' />
      </ButtonWrap>
    </form>
  )
}

const ButtonWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;