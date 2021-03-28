import { BoldTextComponent, GrayTextComponent, UserImageComponent } from '../../index';
import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { SelectedTweetUseData } from '../selectedTweetCard';

interface UserInfoComponentUseProps {
  props: SelectedTweetUseData;
}

export default ({ props }: UserInfoComponentUseProps) => {
  const { userUniqueName, userName, userImage } = props;
  const history = useHistory();
  return (
    <Container onClick={() => history.push(`/tweet/${userUniqueName}`)}>
      <UserImageComponent image={userImage}/>
      <UserInfoTextWrap>
        <div>
          <BoldTextComponent text={userName} />
        </div>
        <div>
          <GrayTextComponent text={userUniqueName} />
        </div>
      </UserInfoTextWrap>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
`;

const UserInfoTextWrap = styled.div`
  padding: 0 10px;
`;