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
        <CatLeft />
        <Box py="5">
          <Text as="h1">Can my cat eat that?</Text>
          <Text maxWidth="2" size="md">Search and filter common house Textlants and see what’s safe for Sprinkles to nibble on.</Text>
          <label htmlFor="search"><Search /></label>
          <input id="search" placeholder="Spider plant, fiddle leaf fig, etc..." onChange={handleInputChange} type="text" />
        </Box>
        <CatRight />
      </Styled.Hero>
    </Layout>
  </Box>
);
