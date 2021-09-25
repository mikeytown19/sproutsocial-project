import React from 'react';
import * as Styled from './Options.styles';
import Layout from '../Layout';

const Options = ({ children }) => (
  <Layout>

    <Styled.OptionsWrapper>
      {children}
    </Styled.OptionsWrapper>
  </Layout>
);

export default Options;
