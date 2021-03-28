import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Header } from '../../pages/index';
import { State } from '../../store/reducers/index';

interface props {
  title: string;
}
export default ({ title }: props) => {
  const [ width, setWidth ] = useState(window.document.body.clientWidth);
  const [ isSideBar, setIsSideBar ] = useState(false);
  const userData = useSelector((state: State) => {
    return state.userReducer.self;
  });

  useEffect(()=> {
    window.addEventListener('resize', ()=> setWidth(window.document.body.clientWidth))
  },[])


  return (
    <Header 
      isSideBar={isSideBar}
      title={title} 
      width={width} 
      self={userData}
    />
  )
}