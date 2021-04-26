import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface props {
  to: string;
  text: string;
  count: number;
  icon: any;
}

export default ({to, icon, count, text}:props) => {
  return (
    <Link to={to} >
      <Container>
        <IconBox>
          {icon}
          {count > 0 && <CountBox>{count}</CountBox>}
        </IconBox>
        <TextBox>{text}</TextBox>
      </Container>
    </Link>
  )
}
const Container = styled.button`
`;

const CountBox = styled.div`
`;

const IconBox = styled.div`
`;

const TextBox = styled.span`
`;