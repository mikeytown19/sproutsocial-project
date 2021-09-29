import React from 'react';
import { Layout } from '../components/Layout';
import {
  Header, ErrorCat, Box, Text,
} from '../components';

const NotFound = () => (
  <>
    <Header />
    <Layout>
      <Box flex fd="column" jc="center" ai="center">
        <Text as="h1">Page Not Found</Text>
        <ErrorCat bottomText="You’ve got to be kitten me." />
      </Box>
    </Layout>
  </>
);

export default NotFound;
