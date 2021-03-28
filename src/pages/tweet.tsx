import React from 'react';
import { TweetCard, SelectedTweetCard } from '../components/index';
import { TweetCardUseData } from '../components/base/tweetCard/tweetCard';

interface PropsData {
  SelectedTweet: any;
  replyList: Array<TweetCardUseData>;
}

export default ({ SelectedTweet, replyList }: PropsData) => {
  return (
    <>
      <SelectedTweetCard />
      {replyList ? replyList.map((el: TweetCardUseData, key)=><TweetCard props={el} key={key}/>) : ""}
    </>
  )
}