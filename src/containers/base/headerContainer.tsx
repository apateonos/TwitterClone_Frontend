import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Header } from '../../pages/index';

interface props {
  title: string;
}
function HeaderContainer ({ title }: props ) {
  const [ isModal, setIsModal ] = useState(false);
  const [ isSideBar, setIsSideBar ] = useState(false);
  const [ width, setWidth ] = useState(window.screen.width);
  const history = useHistory();

  useEffect(()=>{
    console.log('!!')
  }, [isSideBar]);

  const onClickToggle = (dir: string) => {
    if (dir === 'sideBar') {
      setIsSideBar(prev => !prev);
    }
    if (dir === 'modal') {
      setIsModal(prev => !prev);
    }
  }

  useEffect(()=>{
    console.log('cmd');
    window.addEventListener('resize', ()=>{
      setWidth(window.screen.width);
    })

  },[]);

  return (
    <Header
      isLogin={true}
      isModal={isModal}
      isSideBar={isSideBar}
      width={width}
      title={title}
      back={true}
      onClickToggle={onClickToggle}
    />
  )
}

export default HeaderContainer;

