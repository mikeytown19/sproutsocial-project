import React from 'react';
import PropTypes from 'prop-types';

import ThemeProvider from './src/styles/ThemeProvider';

// wrapRootElement is part of the Gatsby API, and thus cannot be the default export

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    {/* <Seo /> */}
    {element}
  </ThemeProvider>
);

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
};
