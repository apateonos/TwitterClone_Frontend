import React from 'react';
import { Main } from './index';
import { Profile } from '../containers/index';

export default () => {
  return (
    <Main 
      title="Profile"
      component={<Profile />}
    />
  )
}