import React, { useState } from 'react';
import { Header } from '../../pages/index';

function HeaderContainer () {
  const [ isModal, setIsModal ] = useState(false);

  const onClickHandler = () => {
    setIsModal(prev => !prev);
  }

  return (
    <><Header
      isLogin={true}
      isModal={isModal}
      onClickHandler={onClickHandler}  
    /></>
  )
}

export default HeaderContainer;