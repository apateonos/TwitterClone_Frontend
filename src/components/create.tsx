import React from 'react';
import styled from 'styled-components';
import { CommonButton, EmphasisButton } from '../atoms/buttons';
import { AreaInput, InfoInput } from '../atoms/inputs';

interface CreateUseProps {
  onChange: Function;
  onSubmit: Function;
  onClick: Function;
  state: any;
}

export default ({ onChange, onSubmit, onClick, state }: CreateUseProps) => {
  const { unique_name, user_name, password, password_, profile } = state;

  return (
    <form name='create' onSubmit={(e) => onSubmit(e)} >
      <InfoInput name='unique_name' onChange={onChange} type='text' value={unique_name} placeholder='ID...' />
      <InfoInput name='user_name' onChange={onChange} type='text' value={user_name} placeholder='Name...' />
      <InfoInput name='password' onChange={onChange} type='password' value={password} placeholder='Password...' />
      <InfoInput name='password_' onChange={onChange} type='password' value={password_} placeholder='Comfirm password...' />
      <AreaInput name='profile' onChange={onChange} value={profile} placeholder='Profile...' />
      <div>
        <EmphasisButton name='create' type='submit' text='Create' />
      </div>
    </form>
  )
}