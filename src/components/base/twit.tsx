import React from 'react';

interface props {
  userImage: any;
  userName: any;
  userId: any;
  text: any;
  reply: any[];
  heart: any[];
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
