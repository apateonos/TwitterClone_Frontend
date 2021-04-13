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
  return (
    <Container>
      <MessageWrap>
        <Message>
          {message.message}
        </Message>
        <Count>
          0
        </Count>
      </MessageWrap>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  padding: 10px;
`;

const MessageWrap = styled.div`
  display: flex;
  align-items: flex-end;
  width: 250px;
`;

const Message = styled.p`
  padding: 10px;
  border-radius: 10px;
  background: ${props => props.theme.color.blue};
  border: 1px solid ${props => props.theme.color.blue};
  color: ${props => props.theme.color.white};
  word-break: break-all;
`;

const Count = styled.span`
  font-size: 14px;
  padding: 8px 6px;
  color: ${props => props.theme.color.blue};
`;

/* const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`;

const MessageWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 250px;
`;

const Message = styled.p`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid ${props => props.theme.color.blue};
  color: ${props => props.theme.color.gray};
  word-break: break-all;
`; */