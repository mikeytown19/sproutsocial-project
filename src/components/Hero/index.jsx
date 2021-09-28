import React from 'react';
import * as Styled from './Hero.styles';
import CatLeft from '../../images/assets/cat-left.svg';
import CatRight from '../../images/assets/cat-right.svg';
import Search from '../../images/assets/search.svg';
import { Box } from '../Box';
import { Text } from '../Text';
import { Layout } from '../Layout';

export const Hero = ({ handleInputChange }) => (
  <Box bg="lightblue">
    <Layout>
      <Styled.Hero>
        <Box css={{ '@bp3': { display: 'none' } }} flex ai="center">
          <CatLeft />
        </Box>
        <Box
          py="5"
          px="3"
          css={{
            '@bp1': {
              pt: '$1',
            },
          }}
        >
          <Text mb="0" as="h1">Can my cat eat that?</Text>
          <Text maxWidth="2" size="md">Search and filter common house Textlants and see what’s safe for Sprinkles to nibble on.</Text>
          <Text as="label"><Search /></Text>
          <input id="search" placeholder="Spider plant, fiddle leaf fig, etc..." onChange={handleInputChange} type="text" />
        </Box>
        <Box css={{ '@bp2': { display: 'none' }, svg: { marginTop: '-60px' } }}>
          <CatRight />
        </Box>
      </Styled.Hero>
    </Layout>
  </Box>
);
