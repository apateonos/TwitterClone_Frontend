import React from 'react';
import { Main } from './index';
import { Home } from '../containers/index';

export default () => {
  return (
    <Main 
      title="Home"
      component={<Home />}
    />
  )
}