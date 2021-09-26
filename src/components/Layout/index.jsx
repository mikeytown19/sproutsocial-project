import React from 'react';
import { styled } from '../../theme/stiches.config';

export const Layout = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

const Wrapper = styled('section', {
  maxWidth: '1600px',
  margin: 'auto',
});
