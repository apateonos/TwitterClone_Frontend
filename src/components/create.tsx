import React from 'react';
import styled from 'styled-components';
import { UserImageInput, UserImage, InfoInput, AreaInput, WhiteButton, CancelButton } from './index';

interface SignComponentUseProps {
  onSubmit: Function;
  onChange: Function;
  onClick: Function;
  userUniqueName: string; 
  userImage: string;
  userName: string; 
  password: string; 
  comfirmPassword: string; 
  profile: string; 
  message: string;
  error: number;
}

export default ({ 
  onSubmit,
  onChange, 
  onClick, 
  userImage,
  userUniqueName, 
  userName, 
  password, 
  comfirmPassword, 
  profile,
  message,
  error
}: SignComponentUseProps) => {  
  console.log(error);
  return (
    <Container name='create' onSubmit={(e)=> onSubmit(e)} error={error ? error : 0}>
      <TitleText>Create Account</TitleText>
      <UserImageWrap>
        {userImage &&
          <CancelButtonWrap>
            <CancelButton onClick={onClick} name='imageCancel'/>
          </CancelButtonWrap>
        }
        <UserImageInput onChange={onChange} userImage={userImage} />
        <UserImage image={userImage}/>
      </UserImageWrap>
      <InfoInput onChange={onChange} name='userUniqueName' value={userUniqueName} placeholder='email or UniqueName...'/>
      <InfoInput onChange={onChange} name='userName' value={userName} placeholder='name...'/>
      <InfoInput onChange={onChange} name='password' type='password' value={password} placeholder='password...'/>
      <InfoInput onChange={onChange} name='comfirmPassword' type='password' value={comfirmPassword} placeholder='check password again...'/>
      <AreaInputWrap>
        <AreaInput onChange={onChange} name='profile' value={profile} placeholder='profile...' />
      </AreaInputWrap>
      <ErrorText>{message}</ErrorText>
      <WhiteButton onClick={() => {}} name='create' text='Create' type='submit'/>
    </Container>
  )
}

interface StyledProps {
  error: number;
}

const Container = styled.form<StyledProps>`
  padding: 30px;
  border-radius: 20px;
  
  input: nth-child(${props => props.error}) {
    border: 1px solid red;
    background: rgba(200, 0, 0, 0.1);
  }
  
  @media only screen and (min-width: 500px) {
    width: 500px;
  }
`;

const TitleText = styled.h2`
  font-size: 25px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 8px;
`;

const UserImageWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 10px 0;
`;

const CancelButtonWrap = styled.div`
  position: absolute;
  right: 100px;
  top: 0;
`;

const ErrorText = styled.div` 
  height: 30px;
  padding: 3px 15px;
`;

const AreaInputWrap = styled.div`
  margin: 5px 0;
  border: 1px solid ${props => props.theme.color.blue};
  border-radius: 25px;
  padding: 7px 21px;
`;