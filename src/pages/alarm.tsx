import React from 'react';
import styled from 'styled-components';

function Alarm () {
  return (
    <>
      <Temp>Alarm</Temp>
    </>
  )
}

export default Alarm;

const Temp = styled.div`
  height: 2000px;
  width: 100%;
  border: 10px solid red;
  background: green;
`;