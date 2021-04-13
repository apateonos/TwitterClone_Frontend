import React from 'react';
import styled from 'styled-components';
import { MessageCard } from './index';
import { MessageCardUseData } from './messageCard';
import { messageIcon } from '../assets/images/svg';

interface MessageUseProps {
  onSubmit: Function;
  onClick: Function;
  onChange: Function;
  messageList: Array<MessageCardUseData>;
  message: string
  self: number;
}
export default ({ onSubmit, onClick, onChange, messageList, message, self }: MessageUseProps) => {
  return (
    <Container>
        <MessageList>
          {messageList.length > 0 ? messageList.map((el) => <MessageCard message={el} self={self} />) : ''}
        </MessageList>
      
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

const MessageList = styled.div`
  height: calc(100vh - 100px);
  overflow-y:scroll;
  padding: 0 15px;
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