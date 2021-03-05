import React, { useEffect, useState } from 'react';
import { Main, Home } from '../pages/index';

interface props {
  timeLine: Array<any>
}

export default ({timeLine}:props ) => {
  const [ tweet, setTweet ] = useState('');

  const onChangeHandler = () => {

  }

  const onSubmitHandler = () => {
    
  }

  return (
    <Main components = {<Home
      onChange={onChangeHandler}
      onSubmit={onSubmitHandler}
      timeLine={timeLine}
      tweet={tweet}
    />}/>
  )
}
