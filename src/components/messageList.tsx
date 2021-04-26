import React from 'react';
import styled from 'styled-components';
import { MessageCard } from './index';
import { MessageCardUseData } from './messageCard';

interface MessageListUseProps {
  messages: Array<MessageCardUseData>;
  self: number;
}
export default ({ messages, self }: MessageListUseProps) => {
  return (
    <MessageList>
      {messages.length > 0 ? messages.map((el, key) => <MessageCard data={el} self={self} key={key}/>) : ''}
    </MessageList>
  )
}

const MessageList = styled.div`
`;