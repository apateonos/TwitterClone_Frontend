import React from 'react';
import styled from 'styled-components';
import { Navigation, Setting } from '../../components/index';
import { SelfProps } from '../../components/base/navigation/setting';

interface NavigationPageUseData {
  self: SelfProps;
  width: number;
}

export default ({ self, width }: NavigationPageUseData) => {
  return (
    <Container>
      <Navigation self={self} />
      {width > 500 && <Setting self={self} />}
    </Container>
  )
}

const Container = styled.nav`
  width: auto;

  @media only screen and (min-width: 500px) {
    min-width: 70px;
  }

  @media only screen and (min-width: 1280px) {
    width: 270px;
  }
`;