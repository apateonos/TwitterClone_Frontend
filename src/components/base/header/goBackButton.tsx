import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { backArrow } from '../../../assets/images/svg';

export default () => {
  const history = useHistory();
  return (
    <Button  onClick={() => history.goBack()}>{backArrow}</Button>
  )
}

const Button = styled.button`
  width: 40px;
  height: 40px;

  margin: 5px;
  border-radius: 20px;

  svg {
    width: 30px;
    height: 30px;
    fill: ${props => props.theme.color.blue}
  }

  :hover {
    background: ${props => props.theme.color.glassBlue}
  }
`;