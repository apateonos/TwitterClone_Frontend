import React, { useState } from 'react';
import styled from 'styled-components';
import { TextArea } from './index';

function WriteTwit () {
  const [ value, setValue ] = useState('');

  const onChangeHandler=(e: { target: HTMLInputElement}) => {
    let val: string=e.target.value;
    setValue(val);
  }

  return (
    <Container>
      <UserIcon>

      </UserIcon>
      <WriteBox>
        <TextAreaWrap>
          <TextArea value={value} onChange={onChangeHandler}/>
        </TextAreaWrap>
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
  display: flex;

  padding: 7px 13px;
  border-bottom: 1px solid #cfcfcf;
  background: white;
  margin-bottom: 10px;
`;

const UserIcon = styled.div`
  min-width: 50px;
  margin-right: 9px;
  background: gray;
`;

const TextAreaWrap = styled.div`
  width: 100%;
  padding: 9px 0;
`;

const WriteBox = styled.div``;

const WriteControlBox = styled.div``;

const ButtonBox = styled.div``;