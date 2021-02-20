import React from 'react';
import styled from 'styled-components';
import { TextArea, Twit } from '../components/index';

interface props {
  writeTwit: string;
  onChangeHandler: any;
  twitList: object[];
}

function Home ( {twitList, writeTwit, onChangeHandler }: props ) {
  return (
    <>
      <TextArea value={writeTwit} _onChangeHandler={onChangeHandler} />
      {twitList.map((el) => 
        <Twit 
          userName={el.userName} 
          userImage={el.userImage}
          userId={el.userId} 
          text={el.text}
          reply={el.reply}
          heart={el.heart}
        />
      )}
    </>
  )
}

export default Home;