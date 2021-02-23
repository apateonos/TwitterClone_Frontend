import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface props {
  displayFunc: any;
  display: boolean;
}
function SideBar({displayFunc, display}:props ) {
  const [ isDisplay, setIsDisplay ] = useState(false);

  useEffect(()=>{
    setIsDisplay(true);
  },[]);

  const onClickHandler = () => {
    setIsDisplay(false);
    setTimeout(()=>{displayFunc('sideBar');}, 300);
  }
  return (
    <Container toggle={isDisplay}>
      <SideBarBox toggle={isDisplay}>
        <SideBarTitleBox>
          <SideBarTitle>Info</SideBarTitle>
          <button onClick={onClickHandler}>dsds</button>
        </SideBarTitleBox>
        <div>

        </div>
        <div>

        </div>
        <div>
          Logout
        </div>
      </SideBarBox>
    </Container>
  )
}

export default SideBar;

interface styledProps {
  toggle: boolean;
}

const Container = styled.div<styledProps>`
  position: fixed;
  display:flex;
  top:0;
  width: 100vw;
  height: 100vh;
  background: ${props=> props.toggle ? '#000000aa' : 'transparent'};

  transition-duration: 0.3s;
`;

const SideBarBox = styled.div<styledProps>`
  width: ${props=> props.toggle ? '280px': '0px'};
  height: 100vh;

  background: white;
  overflow: scroll;

  transition-duration: 0.3s;
`;

const SideBarTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  height: 53px;

  padding: 15px;
  border-bottom: 1px solid #cfcfcf;
`;

const SideBarTitle = styled.div`
  font-size: 19px;
  font-weight: 800;
`;