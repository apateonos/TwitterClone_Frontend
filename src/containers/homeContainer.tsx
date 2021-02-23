import React, { useState, useEffect } from 'react';
import { Home, Main } from '../pages/index';

function HomeContainer () {
  const [ twitList, setTwitList ] = useState([]);
  const [ width, setWidth ] = useState(window.screen.width);

  useEffect(()=>{
    console.log('cmd');
    window.addEventListener('resize', ()=>{
      setWidth(window.screen.width);
    })
  },[]);

  return (
    <Main title='Home' component={<Home
      twitList={twitList}
      width={width}
    />}/>
  )
}

export default HomeContainer;