import React from 'react';
import { ProfileCard, TweetCard } from '../components';
import { TweetCardUseData } from '../components/base/tweetCard/tweetCard';

interface ProfilePageUseData {
  tweetList: Array<TweetCardUseData>;
}

export default ({ tweetList }:  ProfilePageUseData) => {
  return (
    <>
      <ProfileCard />
      {tweetList.length > 0 ? tweetList.map((el: TweetCardUseData, key)=><TweetCard props={el} key={key}/>) : ""}
    </>
  )
}