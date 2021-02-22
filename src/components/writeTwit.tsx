import React, { useState } from 'react';
import styled from 'styled-components';
import { TextArea } from './index';

function WriteTwit () {
  const [value, setValue ] = useState('');

  const onChangeHandler=(e: { target: HTMLInputElement}) => {
    let val: string=e.target.value;
    setValue(val);
  }

  return (
    <Container>
      <UserIcon>

      </UserIcon>
      <WriteBox>
        <TextArea value={value} onChange={onChangeHandler}/>
        <WriteControlBox>

        </WriteControlBox>
        <ButtonBox>

        </ButtonBox>
      </WriteBox>
    </Container>
  )
}

export default WriteTwit;

const Container = styled.div`

`;

const UserIcon = styled.div``;

const WriteBox = styled.div``;

const WriteControlBox = styled.div``;

const ButtonBox = styled.div``;