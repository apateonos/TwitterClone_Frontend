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
  width: 20px;
  height: 20px;
  border: 1.4px solid black;
  border-radius: 20px;
  background: gray;

  @media only screen and ( min-width: 300px ) {
    width: 25px;
    height: 25px;
  }
  
  @media only screen and ( min-width: 500px ) {
    width: 35px;
    height: 35px;
  }
`;