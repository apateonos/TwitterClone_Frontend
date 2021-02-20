import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Profile } from '../pages/index';
import { AsideContainer, HeaderContainer } from './index';

function ProfileContainer () {
  const history = useHistory();
  const [ userName, setUserName ] = useState();

  useEffect(()=>{
    let id: string = history.location.pathname.slice(1);
    setUserName(id);
  }, [])

  return (
    <>
      <HeaderContainer/>
      <Profile userName={userName}/>
      <AsideContainer/>
    </>
  )
}

export default ProfileContainer;