import React from 'react';
import styled from 'styled-components';
import { Twit, WriteTwit } from '../components/index';

interface props {
  twitList: any[];
  width: number;
}

function Home ({ twitList, width }: props ) {
  return (
    <Container>
      {width > 500 && <WriteTwit/>}
      {twitList.length > 0 && twitList.map((el) => 
        <Twit 
          userName={el.userName} 
          userImage={el.userImage}
          userId={el.userId} 
          text={el.text}
          reply={el.reply}
          heart={el.heart}
          retwit={el.retwit}
        />
      )}
    </Container>
  )
}

export default Home;

const Container = styled.div`
  background: black;
`;
