import React from 'react';
import styled from 'styled-components';
import { TextArea, Twit } from '../components/index';

interface props {
  writeTwit: string;
  onChangeHandler: any;
  twitList: any[];
}

function Home ( {twitList, writeTwit, onChangeHandler }: props ) {
  return (
    <Container>
      <TextArea value={writeTwit} _onChangeHandler={onChangeHandler} />
      {twitList.length > 0 && twitList.map((el) => 
        <Twit 
          userName={el.userName} 
          userImage={el.userImage}
          userId={el.userId} 
          text={el.text}
          reply={el.reply}
          heart={el.heart}
        />
      )}
    </Container>
  )
}

export default Home;

const Container = styled.div`
  width: 600px;
  min-height: 100vh;
  
  border-left: 1px solid #cfcfcf;
  border-right: 1px solid #cfcfcf;

  @media only screen and(max-width: 680px) {
    width: 100%;
  }
`;