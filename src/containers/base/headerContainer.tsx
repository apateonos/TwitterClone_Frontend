import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Header } from '../../pages/index';

function HeaderContainer () {
  const [ isModal, setIsModal ] = useState(false);
  const [ width, setWidth ] = useState(window.screen.width);

  const history = useHistory();

  const onClickHandler = () => {
    setIsModal(prev => !prev);
  }

  useEffect(()=>{
    console.log('cmd');
    window.addEventListener('resize', ()=>{
      setWidth(window.screen.width);
    })

    const path = history.location.pathname;
    console.log(path.split('/')[1]);
    console.log(path);
  },[]);

  return (
    <Header
      isLogin={true}
      isModal={isModal}
      width={width}
      title={}
      onClickHandler={onClickHandler}  
    />
  )
}

export default HeaderContainer;