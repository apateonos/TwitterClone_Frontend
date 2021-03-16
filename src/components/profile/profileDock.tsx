import React from 'react';

interface props {
  onClick: Function;
  props: ProfileDockUseData;
}

export interface ProfileDockUseData {
  isLogin: boolean,
  userImage: any, 
  userName: string, 
  userUniqueName: string, 
  profile: string, 
  userCreatedTime: number, 
  userFollowerNumber: number, 
  userFollowingNumber: number
}

export default ({ onClick, props }: props) => {
  const { isLogin, userImage, userName, userUniqueName, profile, userCreatedTime, userFollowerNumber, userFollowingNumber } = props;
  return (
    <>
      <div>{userImage}</div>
      <div>{userName}</div>
      <div>{userUniqueName}</div>
      {isLogin
        ? <div></div>
        : <button>Follow</button>
      }
      <div>{profile}</div>
      <div>{userCreatedTime}</div>
      <div>{userFollowerNumber}</div>
      <div>{userFollowingNumber}</div>
    </>
  )
}