import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Profile } from '../pages/index';
import { AsideContainer, HeaderContainer } from './index';

function ProfileContainer () {
  const history = useHistory();

  useEffect(()=>{
    console.log(history.location.pathname);
  }, [])

  return (
    <>
    <NavContainer/>
    <Profile/>
    <AsideContainer/>
  </>
  )
}

export default ProfileContainer;