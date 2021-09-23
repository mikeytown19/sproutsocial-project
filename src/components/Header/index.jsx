import React from 'react';
import { Link } from 'gatsby'
import Logo from '../../images/assets/catopia.svg';
import * as Styled from './Header.styles'
import Layout from '../Layout'

const Header = () => (
  <Styled.Header>
    <Layout>
      <Link to="/">
        <Logo />
      </Link>
    </Layout>
  </Styled.Header>
);

export default Header;

