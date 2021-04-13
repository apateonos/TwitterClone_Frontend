import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { branchButtonIcon } from '../../../assets/images/svg';

interface MoreVertUseProps {
  onClick: Function;
  list: Array<BranchProps>;
}

interface BranchProps {
  text: string;
  name: string;
  idx: number;
}
export default ({ onClick, list }:MoreVertUseProps) => {
  const [ isVert, setIsVert ] = useState(false);

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
  useClickOutside(clickRef, ()=>{setIsVert(false)});
  return (
    <Container >
      {isVert && 
        <>
          <BranchBox ref={clickRef}>
          {
            list.map((el, key) => <Branch name={el.name} onClick={(e) => {onClick(e, el.idx); setIsVert(false)}} key={key}>{el.text}</Branch>)
          }
          </BranchBox>
        </>
      }
      <Button onClick={(event)=>{event.stopPropagation(); setIsVert(true);}}>{branchButtonIcon}</Button>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  
  :hover {
    background: ${props => props.theme.color.glassBlue};
  }
`;

const BranchBox = styled.div`
  position: absolute;
  right: 0;
  z-index: 1;
  shadow: 5px;
  background: ${props => props.theme.color.white};
  box-shadow: 0px 0px 20px ${props => props.theme.color.borderGray};

  div: last-child {
    border-bottom: none;
  }
`;

const Branch = styled.button`
  width: 200px;
  padding: 8px 15px;

  font-size: 16px;
  transition-duration: 0.6s;
  :hover {
    background: ${props => props.theme.color.borderBackgroundGray};
  }
`;

const OnBranchBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 2;
`;