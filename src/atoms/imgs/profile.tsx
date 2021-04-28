import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

interface UserImageUseProps {
  image: string;
  to?: string;
}

export default ({ image, to }: UserImageUseProps) => {
  const history = useHistory();
  const textClicked = (e: React.MouseEvent) => {
    e.stopPropagation();
    history.push(`/profile/${to}`);
  }
  return (
    <UserImage onClick={(e) => textClicked(e)}/>
  )
}

const UserImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: gray;
  border: 2px solid white;
`;