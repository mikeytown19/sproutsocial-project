import React from 'react';
import GlobalStyles from './GlobalStyles';
import theme from './theme';

const ThemeProvider = ({ children }) => (
  <>
    <GlobalStyles theme={theme} />
    {children}
  </>
);

export default ThemeProvider;
