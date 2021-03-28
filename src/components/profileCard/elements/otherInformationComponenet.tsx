import { GetUserProfileUseData } from 'api/user';
import React from 'react';
import styled from 'styled-components';

interface OtherInformationComponenetUseProps {
  following: number;
  follower: number;
}

export default ({ following, follower }: OtherInformationComponenetUseProps) => {
  return (
    <Container>
      <Card>{follower > 0 ? follower : 0}<CardText>Follower</CardText></Card>
      <Card>{following > 0 ? following : 0}<CardText>Following</CardText></Card>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  padding: 0 25px;
  margin-bottom: 15px;
`;

const Card = styled.div`
  font-weight: 900;
  margin: 0 10px;
`;
const CardText = styled.span`
  color: gray;
  font-weight: 700;
`;
