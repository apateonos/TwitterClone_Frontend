import React from 'react';
import styled from 'styled-components';

interface UserImageInputUseProps{
  onChange: Function;
  userImage: string;
}

export default ({ onChange, userImage }: UserImageInputUseProps) => {
  return (
    <>
      <label  htmlFor='userImage'>
        <ImageBox src={userImage ? userImage : 'src/assets/images/default_image.jpg'} />
      </label>
      <input
        id='userImage'
        type="file"
        accept="image/jpeg, image/jpg, image/png"
        name='userImage'
        style={{display:'none'}}
        onChange={(e)=>onChange(e)}
      />
    </>
  )
}

const ImageBox = styled.img`
  width: 150px;
  height: 150px;
  border: 2px solid ${props => props.theme.color.blue};
  border-radius: 50%;
`;