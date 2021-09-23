import React from 'react';
import styled from '@emotion/styled';

const Layout = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export default Layout;

const Wrapper = styled.section`
  max-width: 1600px;
  margin: auto;
`;
