import React from 'react';
import styled from 'styled-components';
import { MessageCard } from '../index';
import { MessageCardUseData } from './messageCard';

interface MessageListUseProps {
  messages: Array<MessageCardUseData>;
  self: number;
}
export default ({ messages, self }: MessageListUseProps) => {
  return (
    <MessageList>
      {messages.length > 0 ? messages.map((el, key) => <MessageCard message={el} self={self} key={key}/>) : ''}
    </MessageList>
  )
}

const MessageList = styled.div`
  height: calc(100vh - 100px);
  overflow-y:scroll;
  padding: 0 15px;
`;