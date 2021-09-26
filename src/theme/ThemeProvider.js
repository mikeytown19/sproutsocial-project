import React from 'react';
import { globalStyles } from './GlobalStyles';

globalStyles();
const ThemeProvider = ({ children }) => (
  <>
    {children}
  </>
);

export default ThemeProvider;
