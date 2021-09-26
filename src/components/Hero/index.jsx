import React from 'react';
import * as Styled from './Hero.styles';
import CatLeft from '../../images/assets/cat-left.svg';
import CatRight from '../../images/assets/cat-right.svg';
import Search from '../../images/assets/search.svg';
import { Layout, Box } from '..';

export const Hero = ({ handleInputChange }) => (
  <Box bg="lightblue">
    <Layout>
      <Styled.Hero>
        <CatLeft />
        <Box py="5">
          <h1>Can my cat eat that?</h1>
          <p>Search and filter common house plants and see what’s safe for Sprinkles to nibble on.</p>
          <label><Search /></label>
          <input placeholder="Spider plant, fiddle leaf fig, etc..." onChange={handleInputChange} type="text" />
        </Box>
        <CatRight />
      </Styled.Hero>
    </Layout>
  </Box>
);
