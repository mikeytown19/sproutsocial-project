import React from 'react';
import ThemeProvider from './src/styles/ThemeProvider';

// wrapRootElement is part of the Gatsby API, and thus cannot be the default export

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
