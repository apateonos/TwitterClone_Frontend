import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { baseURL } from '../../config/config';

interface UserImageUseProps {
  onClick?: Function
  image: string;
  type?: 'large'|'normal'|'small';
  to?: string;
}

export default ({ image, type, to }: UserImageUseProps) => {
  return (
    <>{ to
      ? <Link to={`/profile/${to}`} ><UserImage src={image ? baseURL + image : ''} /></Link>
      : <UserImage src={image ? baseURL + image : ''} />
    }</>
  )
}

const UserImage = styled.img`
`;