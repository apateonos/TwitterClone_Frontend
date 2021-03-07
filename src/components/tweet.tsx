import React from 'react';
import { TextArea } from './index';

interface props {
  onChange: Function,
  onClick: Function,
  value: string,
}

export default ({ onChange, onClick, value }: props) => {
  return (
    <div>
      <div>Tweet Box</div>
      <TextArea onChange={onChange} value={value} placeholder="What's on your mind..." name='tweet' height={30}/>
      <button onClick={(e)=>onClick(e)}>Tweet</button>
    </div>
  )
}