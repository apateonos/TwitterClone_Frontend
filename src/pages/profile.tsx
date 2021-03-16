import React from 'react';
import { ProfileDock, TweetCard } from '../components';
import { TweetCardUseData } from '../components/base/tweet/tweetCard';
import { ProfileDockUseData } from '../components/profile/profileDock';

interface props {
  onClick: Function;
  userInfo: ProfileDockUseData;
  tweetList: Array<TweetCardUseData>;
}

export default ({ onClick, userInfo, tweetList }: props) => {
  return (
    <>
      <ProfileDock props={userInfo} onClick={onClick}/>
      {tweetList.length > 0 ? tweetList.map((el: TweetCardUseData, key)=><TweetCard onClick={onClick} props={el} idx={key} key={key}/>) : ""}
    </>
  )
}