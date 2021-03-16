import React from 'react';
import { TweetDock, TweetCard } from '../components/index';
import { TweetCardUseData } from '../components/base/tweet/tweetCard';
import { TweetDockUseData } from '../components/home/tweetDock';

interface props {
  onClick: Function;
  tweetDockProps: TweetDockUseData;
  timeline: Array<TweetCardUseData>;
  isModal: boolean;
}

export default ({isModal, tweetDockProps, onClick, timeline}: props) => {
  return (
    <>
      <TweetDock props={tweetDockProps} />
      {isModal && <TweetDock props={tweetDockProps} />}
      {timeline.length > 0 ? timeline.map((el, key)=><TweetCard onClick={onClick} props={el} idx={key} key={key}/>) : ""}
    </>
  )
}

