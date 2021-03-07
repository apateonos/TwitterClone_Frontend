import React from 'react';
import { Link } from 'react-router-dom';
import { Tweet } from '../components/index';

interface props {
  onChange: Function,
  onClick: Function,
  tweet: string,
  timeLine: Array<any>
}

export default ({onChange, onClick, tweet, timeLine}: props ) => {
  return (
    <>
      <div>Home Page</div>
    </>
  )
}

