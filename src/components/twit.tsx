import React from 'react';

interface props {
  userImage: any;
  userName: string;
  userId: string;
  text: string;
  reply: object[];
  heart: string[];
}

function Twit ({ userImage, userName, userId, text, reply, heart }:props ) {
  return (
    <div>
      <div>{userImage}</div>
      <div>{userName}</div>
      <div>{userId}</div>
      <div>{text}</div>
      <div>{reply}</div>
      <div>{heart}</div>
    </div>
  )
}

export default Twit;
