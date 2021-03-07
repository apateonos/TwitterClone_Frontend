import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Route from '../../routes/route';

export default () => {
  const { user } = useSelector(state => ({ user: state.userReducer.user}));
  console.log('>>>>',user);
  return (
    <>
      <Route/>
    </>
  )
}
