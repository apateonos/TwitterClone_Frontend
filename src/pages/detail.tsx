import React from 'react';
import { Detail } from '../containers/index';
import { Main } from './index';

export default () => {
  return (
    <Main
      title="Tweet"
      component={<Detail/>}
    />
  )
}