import React from 'react';
import styled from 'styled-components';
import { TextArea, Twit } from '../components/index';

interface props {
  twitList: any[];
}

function Home ( {twitList }: props ) {
  return (
    <Container>
      <WriteTwitBox>
      </WriteTwitBox>
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

`;

const WriteTwitBox = styled.div`
  
`;