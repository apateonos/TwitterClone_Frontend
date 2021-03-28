import React from 'react';
import { TweetDock, TweetCard } from '../components/index';
import { TweetCardUseData } from '../components/base/tweetCard/tweetCard';
import { Modal } from '../components/index';
import styled from 'styled-components';

interface props {
  timeline: Array<TweetCardUseData>;
}

export default ({ timeline }: props) => {
  return (
    <>
      <TweetDockWrap>
        <TweetDock />
      </TweetDockWrap>
      {timeline.length > 0 ? timeline.map((el, key)=><TweetCard props={el} key={key}/>) : ""}
    </>
  )
}

const TweetDockWrap = styled.div`
  border-bottom: 1px solid ${props => props.theme.color.borderGray};
  margin-bottom: 10px;
`;