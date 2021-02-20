import React from 'react';

interface props {
  text: string;
  count: number;
  image: any;
}

const NavButton = ({image, count, text}:props ) => {
  return (
    <div>
      {count > 0 && <div>{count}</div>}
      {image && <div>{image}</div>}
      {text && <div>{text}</div>}    
    </div>
  )
}

export default NavButton;
