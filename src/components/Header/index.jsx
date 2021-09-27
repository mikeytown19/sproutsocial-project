import React from 'react';
import { Link } from 'gatsby';
import { Layout } from '../Layout';
import { styled } from '../../theme/stiches.config';

import Logo from '../../images/assets/catopia.svg';

export const Header = () => (
  <Wrapper>
    <Layout>
      <Link to="/">
        <Logo />
      </Link>
    </Layout>
  </Wrapper>
);

const Wrapper = styled('header', {
  bg: '$primary',
  textAlign: 'left',
  svg: { height: '32px', padding: '20px 30px' },
});
