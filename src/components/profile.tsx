import { CountTextButton, EmphasisButton } from '../atoms/buttons';
import { UserImage } from '../atoms/imgs';
import { UserNameText, UniqueNameText, ProfileText } from '../atoms/text';
import React, { useEffect, useState } from 'react';
import { SelfData } from 'store/reducers/user';
import { FollowsData } from 'store/reducers/follow';

interface ProfileUseProps {
  self: SelfData;
  follows: Array<FollowsData>;
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


const initialState = { isFollow: false, isSelf: false };
export default ({ self, follows, user, following, follower }: ProfileUseProps) => {
  const { user_id, user_image, unique_name, user_name, profile } = user;
  const [ state, inputState ] = useState(initialState);

  useEffect(() => {
    const isFollow = follows.some(fu => fu.user_id === user_id);
    const isSelf = self.user_id !== undefined && self.user_id === user_id;
    inputState({ ...state, isSelf, isFollow });
  }, [follows, self]);

  return (
    <div>
      <UserImage image={user_image} />
      {state.isSelf 
        ? <EmphasisButton name='setting' text='Setting' />
        : state.isFollow
          ? <EmphasisButton name='unfollow' idx={user_id} text='Unfollow' />
          : <EmphasisButton name='follow' idx={user_id} text='Follow' />
      }
      <UserNameText text={user_name} />
      <UniqueNameText text={unique_name} />
      <ProfileText text={profile} />
      <CountTextButton name='userlist' count={following !== undefined ? following.length : 0} idx={following} text='Following'/>
      <CountTextButton name='userlist' count={follower !== undefined ? follower.length: 0} idx={follower} text='Follower' />
    </div>
  )
}