import React from 'react';
import styled from 'styled-components';
import { TweetContentComponent, UserInfoComponent } from '../index';
import { TweetCardUseData } from '../tweetCard';

interface props { props: TweetCardUseData }

export default ({props}:props) => {
  const { 
    retweetCount,
    retweetNumber,
    retweetUserImage,
    retweetUserName,
    retweetUserUniqueName,
    retweetContent, 
  } = props;

  return (
    <Container>
      <Component>
        <UserInfoWrap>
          <UserImageSmall src={retweetUserImage ? retweetUserImage : 'src/assets/images/default_image.jpg'}/>
          <UserInfoComponent userName={retweetUserName} userUniqueName={retweetUserUniqueName}/>
        </UserInfoWrap>
        <TweetContentComponent tweetContent={retweetContent} />
      </Component>
    </Container>
  )
}

const Container = styled.div`
  padding: 0 15px;
  margin: 5px 0;
`;

const Component = styled.div`
  padding: 5px 8px;
  border: 1px solid ${props => props.theme.color.borderGray};
  border-radius: 10px;

  transition-duration: 0.5s;
  :hover {
    background: #dfdfdf;
  }
`;

const UserInfoWrap = styled.div`
  display: flex;
`;

const UserImageSmall = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;