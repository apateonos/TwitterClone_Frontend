import React from 'react';
import styled from 'styled-components';

interface props {
  onChange: Function;
  icon: any;
  accept: string;
  name: string;
}

export default ({ onChange, icon, accept, name }: props) => {
  return (
    <>
      <Label htmlFor={name}>
        {icon}
      </Label>
      <input
        id={name}
        type="file"
        accept={accept}
        name={name}
        style={{display:'none'}}
        onChange={(e)=>onChange(e)}
      />
    </>
  )
}

const Label = styled.label`
`;
