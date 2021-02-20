import React from 'react';

interface props {
  userName: string;
}

function Profile ({ userName }: props ) {
  return (
    <>
      <div>{userName}</div>
    </>
  )
}

export default Profile;