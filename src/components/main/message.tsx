import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { MessageList } from '../index';
import { MessageCardUseData } from '../molecule/messageCard';
import { messageIcon } from '../../assets/images/svg';

interface MessageUseProps {
  onSubmit: Function;
  onClick: Function;
  onChange: Function;
  messages: Array<MessageCardUseData>;
  message: string
  self: number;
}
export default ({ onSubmit, onClick, onChange, messages, message, self }: MessageUseProps) => {

  return (
    <Container>
      <MessageList messages={messages} self={self} />
      <InputWrap name='send' onSubmit={(e) => onSubmit(e)}>
        <MessageInput name='message' onChange={(e) => onChange(e)} value={message}/>
        <SendButton type='submit'>{messageIcon.send}</SendButton>
      </InputWrap>
    </Container>
  )
}

const Container = styled.div`
  background: white;
`;

const InputWrap = styled.form`
  display: flex;
  align-items: center;
  padding: 0 25px;
  border-top: 1px solid ${props => props.theme.color.borderGray};
  height: 50px;
`;

const MessageInput = styled.input`
  width: 100%;
  padding: 5px 15px;
  border: 1px solid ${props => props.theme.color.blue};
  border-radius: 15px;
`;

const SendButton = styled.button`
  svg {
    width: 22.5px;
    height: 22.5px;
    fill: ${props => props.theme.color.blue};
  }
`;