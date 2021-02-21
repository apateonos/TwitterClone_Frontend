import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Profile } from '../pages/index';
import { AsideContainer, HeaderContainer } from './index';

function ProfileContainer () {
  const history = useHistory();
  const [ userName, setUserName ] = useState('');

  useEffect(()=>{
    let id: string = history.location.pathname.slice(1);
    console.log(id);
    fetch (`http://localhost:4000/api/users/${id}`)
    .then(res => console.log(res));
  }, [])

  return (
    <Container>
      <HeaderContainer/>
      <Profile userName={userName}/>
      <AsideContainer/>
    </Container>
  )
}

export default ProfileContainer;

const Container: any=styled.div`
  display: flex;

  @media only screen and (max-width: 500px){
    display:block;
  }
`;