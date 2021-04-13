import React, { useState } from 'react';
import styled from 'styled-components';
import { nav } from '../../assets/images/svg';
import { CancelSmallButton } from '../index';

interface SearchComponentUseProps {
  onSubmit: Function;
  onClick: Function;
  onChange: Function;
  keyword: string;
  placeholder?: string;
}

export default ({ onSubmit, onClick, onChange, keyword, placeholder }: SearchComponentUseProps) => {
  const [ isFocus, setIsFocus ] = useState(false);

  const useClickOutside = (ref: any, callback: any) => {
    const handleClick = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };

    React.useEffect(() => {
      document.addEventListener('click', handleClick);
      return () => {
        document.removeEventListener('click', handleClick);
      }
    });
  }

  const clickRef = React.useRef() as any;
  useClickOutside(clickRef, ()=>setIsFocus(false));

  return (
    <Container isFocus={isFocus} name='search' onSubmit={(e) => onSubmit(e)} >
      <IconWrap isFocus={isFocus}>
        {nav.explore}
      </IconWrap>
      <SearchInput ref={clickRef} onClick={(e)=> onClick(e)} onChange={(e) => onChange(e)} name='search' value={keyword} placeholder={placeholder}/>
      {keyword.length > 0 && isFocus &&
        <CancelButtonWrap >
          <CancelSmallButton onClick={onClick} name='cancel' type='button'/>
        </CancelButtonWrap>
      }
    </Container>
  )
}
interface StyledUseProps {
  isFocus: boolean;
}

const Container = styled.form<StyledUseProps>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5px;

  border-radius: 30px;
  border: 1px solid ${props => props.isFocus ? props.theme.color.blue : props.theme.color.borderGray};
  background: ${props => props.isFocus ? props.theme.color.white : props.theme.color.borderGray};
`;

const IconWrap = styled.div<StyledUseProps>`
  width: 20px;

  svg {
    fill: ${props => props.isFocus ? props.theme.color.blue : props.theme.color.black};
  }
`;  

const SearchInput = styled.input`
  background: none;
  width: 100%;
  height: 20px;
  padding: 0 10px;
`;

const CancelButtonWrap = styled.div`
  width: 20px;
  height: 20px;
`;