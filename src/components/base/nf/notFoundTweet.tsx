import React from 'react';
import styled from 'styled-components';

export default () => {
  return (
    <Container>
      <TitleWrap>
        <MainTitleWrap>
          <MainTitle>This account doesn’t have not Tweet</MainTitle>
        </MainTitleWrap>
        <SubTitle>Try new tweet</SubTitle>
      </TitleWrap>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const TitleWrap = styled.div`
  text-align: center;
`;

const MainTitleWrap = styled.div`
  margin: 15px 0;
`;

const SubTitle = styled.div`
  color: gray;
`;

const MainTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
`;