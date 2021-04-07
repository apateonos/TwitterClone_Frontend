import React from 'react';
import styled from 'styled-components';

interface props {
  time: string;
}

export default ({time}:props) => {
  const setTime = (time: string) => {
    let now = new Date();
    let created = new Date(time);
    let result = (now.getTime() - created.getTime())/ (1000*60*60*24);
    
    if (result > 1) {
      return `${monthNames[created.getMonth()]} ${created.getDate()}, ${created.getFullYear()}`;
    }
    result *= 24;
    if (result > 1) {
      return `${Math.floor(result)}hours`
    }

    result *= 60;
    if (result > 1) {
      return `${Math.floor(result)}minutes..`
    }

    result *= 60;
    return `${Math.floor(result)}seconds...`
  }
  
  setInterval(setTime, 1000);
  
  return (
    <Container>{setTime(time)}</Container>
  )
}

const monthNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const Container = styled.p`
  color: ${props => props.theme.color.grayText};
  padding: 1px;
`;