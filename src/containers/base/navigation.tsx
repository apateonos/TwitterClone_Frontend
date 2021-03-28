import React, { useState, useEffect } from 'react';
import { Navigation } from '../../pages/index';
import { useSelector } from 'react-redux';
import { State } from '../../store/reducers/index';

export default () => {
  const [ width, setWidth ] = useState(window.document.body.clientWidth); 
  const userData = useSelector((state: State) => {
    return state.userReducer.self;
  });

  useEffect(()=> {
    window.addEventListener('resize', ()=> setWidth(window.document.body.clientWidth));
  }, [])

  return (
    <Navigation width={width} self={userData}/>
  )
}