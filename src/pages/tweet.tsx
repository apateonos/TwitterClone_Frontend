import React from 'react';
import { TweetCard, TweetMain } from '../components/index';
import { TweetCardUseData } from '../components/base/tweet/tweetCard';

interface PropsData {
  onClick: Function;
  mainTweet: TweetCardUseData;
  replyList: Array<TweetCardUseData>;
}

export default ({ onClick, mainTweet, replyList }: PropsData) => {
  return (
    <>
      <TweetMain props={mainTweet}/>
      {replyList ? replyList.map((el: TweetCardUseData, key)=><TweetCard onClick={onClick} props={el} idx={key} key={key}/>) : ""}
   </>
  )
}