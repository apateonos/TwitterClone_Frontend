import React from 'react';

interface props {
  onChange: Function,
  onSubmit: Function,
  tweet: string,
  timeLine: Array<any>
}

export default ({onChange, onSubmit, tweet, timeLine}: props ) => {
  return (
    <div>Home Page</div>
  )
}

