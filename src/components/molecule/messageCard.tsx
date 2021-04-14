import React from 'react';
import styled from 'styled-components';

interface MessageCardUseProps {
  message: MessageCardUseData;
  self: number;
}

export interface MessageCardUseData {
  user_id: number;
  message: string;
}

export default ({ message, self }: MessageCardUseProps) => {
  const isSelf = self !== undefined && message.user_id === self;

  return (
    <Container isSelf={isSelf}>
      <MessageWrap isSelf={isSelf}>
        <Message isSelf={isSelf}>
          {message.message}
        </Message>
      </MessageWrap>
    </Container>
  )
}

interface StyledProps {
  isSelf: boolean;
}

const Container = styled.div<StyledProps>`
  display: flex;
  ${props => props.isSelf ? 'justify-content: flex-end' : ''};
  padding: 10px;
`;

const MessageWrap = styled.div<StyledProps>`
  display: flex;
  ${props => props.isSelf ? 'justify-content: flex-end' : ''};
  width: 250px;

`;

const Message = styled.p<StyledProps>`
  padding: 10px;
  border-radius: 10px;
  background: ${props => props.isSelf ? props.theme.color.white : props.theme.color.blue};
  border: 1px solid ${props => props.theme.color.blue};
  color: ${props => props.isSelf ? props.theme.color.blue : props.theme.color.white};
  word-break: break-all;
`;