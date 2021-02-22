import React, { useState } from 'react';
import { Home, Main } from '../pages/index';

function HomeContainer () {
  const [ twitList, setTwitList ]=useState([]);
  const [ writeTwit, setWriteTwit ]=useState('');

  return (
    <Main component={<Home
      twitList={twitList}
    />}/>
  )
}

export default HomeContainer;