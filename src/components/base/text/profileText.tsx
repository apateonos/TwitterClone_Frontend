import React from 'react';
import styled from 'styled-components';

interface ProfileTextUseProps {
  text: string;
}
export default ({ text }: ProfileTextUseProps ) => {
  return (
    <Profile>{text}</Profile>
  )
}

const Profile = styled.div``;