import React from 'react';

import LostCat from '../../images/assets/lostCat.svg';
import { Box } from '../Box';
import { Text } from '../Text';

export const ErrorCat = ({ bottomText }) => (
  <Box flex fd="column" jc="center" ai="center">
    <Text as="h3" fw="5">
      Wait a meow-ment.
    </Text>
    <Box css={{
      svg: {
        size: '400px',
        '@bp1': {
          maxWidth: '100px',
          maxHeight: '100px',
        },
      },
    }}
    >
      <LostCat />
    </Box>
    {bottomText
    && (
    <Text as="h3" fw="5">
      {bottomText}
    </Text>)}
  </Box>
);
