import React from 'react';
import styled from 'styled-components';
import { GobackButton, SideBarButton } from '../../components/index';

interface props {
  self: any;
  title: string;
  width: number;
  isSideBar: boolean;
}
export default ({ title, width, self, isSideBar }: props) => {

  return (
    <ContainerWrap>
        <Container>
        {title === "Home" ? width > 500 ? "" : <SideBarButton self={self} /> : <GobackButton/>}
        <Title>{title}</Title>
      </Container>
    </ContainerWrap>
  )
}

const ContainerWrap = styled.div`
  height: 50px;
`;

const Container = styled.header`
  z-index: 1;
  position: fixed;
  display: flex;
  align-items: center;
  width: 598px;
  height: 50px;
  background: white;
  border-bottom: 1px solid ${props => props.theme.color.borderGray};
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 900;
  margin-left: 10px;
`;