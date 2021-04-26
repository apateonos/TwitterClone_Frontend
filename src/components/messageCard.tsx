import { UserImage } from '../atoms/imgs';
import { MessageText, TimeText } from '../atoms/text';
import React from 'react';
import styled from 'styled-components';

interface MessageCardUseProps {
  data: MessageCardUseData;
  self: number;
}

export interface MessageCardUseData {
  user_id: number;
  user_image: string;
  unique_name: string;
  message: string;
  created_at: string;
}

export default ({ data }: MessageCardUseProps) => {
  const { user_id, unique_name, user_image, message, created_at } = data;
  return (
    <div>
      <UserImage image={user_image}/>
      <MessageText text={message} />
      <TimeText text={created_at} />
    </div>
  )
}

const Container = styled.div``;