import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store/reducers';
import { ProfileButtonComponent, UserProfileContentComponent, UserProfileImageComponent, OtherInformationComponenet } from './index'; 

export default () => {
  const [ isModal, setModal ] = useState(false);
  const dispatch = useDispatch();
  const { user, self } = useSelector((state: State) => ({user: state.userReducer.user, self: state.userReducer.self}));
  const selfNumber = self.userNumber;
  const { 
    isFollow,
    userNumber,
    userImage,
    userName,
    userUniqueName,
    profile,
    userCreatedTime,
    userFollowerNumber,
    userFollowingNumber 
  } = user;

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = event.currentTarget;

    switch (name) {
      case 'setting':
        break;
      case 'unfollow':
        break;
      case 'setting':
        break;
      default:
        break;
    }
  }

  return (
    <Container>     
      <UserProfileImageComponent userImage={userImage} userBackgroundImage=''/>
      <ProfileButtonComponent onClick={onClickHandler} selfNumber={selfNumber} userNumber={userNumber} isFollow={isFollow}/>
      <UserProfileContentComponent userName={userName} userUniqueName={userUniqueName} profile={profile}/>
      <OtherInformationComponenet follower={userFollowerNumber} following={userFollowingNumber}/>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.color.borderGray};
  background: white;

  margin-bottom: 10px;
  `;