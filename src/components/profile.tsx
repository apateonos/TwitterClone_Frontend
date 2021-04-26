import { CountTextButton, EmphasisButton } from '../atoms/buttons';
import { UserImage } from '../atoms/imgs';
import { UserNameText, UniqueNameText, ProfileText } from '../atoms/text';
import React from 'react';

interface ProfileUseProps {
  onClick: Function;
  user: ProfileUseData;
  following: Array<any>;
  follower: Array<any>;
}

interface ProfileUseData {
  user_id: number;
  user_image: string;
  user_name: string;
  unique_name: string;
  profile: string;
  created_at: string;
}


export default ({ onClick, user, following, follower }: ProfileUseProps) => {
  const { user_id, user_image, unique_name, user_name, profile } = user;
  return (
    <div>
      <UserImage image={user_image} />
      <EmphasisButton name='follow' onClick={onClick} idx={user_id} text='Follow' />
      <UserNameText text={user_name} />
      <UniqueNameText text={unique_name} />
      <ProfileText text={profile} />
      <CountTextButton name='profileFollowing' onClick={onClick} count={following.length} text='Following'/>
      <CountTextButton name='profileFollower' onClick={onClick} count={follower.length} text='Follower' />
    </div>
  )
}