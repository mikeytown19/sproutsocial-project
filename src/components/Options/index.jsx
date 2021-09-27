import React from 'react';
import * as Styled from './Options.styles';
import { Layout } from '../Layout';
import { Box } from '../Box';
import { Text } from '../Text';

import GridIcon from '../../images/assets/grid.svg';
import ListIcon from '../../images/assets/list.svg';
import DownArrow from '../../images/assets/downArrow.svg';

export const Options = ({
  handleChange, setSelectTerm, setViewOptionList, viewOptionList, handleClick,
}) => (
  <Layout>
    <Styled.OptionsWrapper>
      <Box flex fd="column">
        <Text fw="5" as="label" pb="2">Toxicity</Text>
        <Box css={{
          position: 'relative',
          svg: {
            position: 'absolute',
            right: '10px',
            top: '13px',
          },
        }}
        >
          <DownArrow />
          <Text p="1" as="select" color="textLight" onChange={(e) => handleChange(e, setSelectTerm)}>
            <option value="" default>Select an option</option>
            <option value="toxic">toxic</option>
            <option value="non-toxic">non-toxic</option>
          </Text>
        </Box>
      </Box>

      <Box>
        <Text fw="5" mt="1" pb="0">View Options</Text>
        <Box flex ai="center">
          <Box
            mr="1"
            flex
            ai="center"
            onClick={() => handleClick(viewOptionList, setViewOptionList)}
            css={{
              '&:hover': {
                cursor: 'pointer',
              },
            }}
          >
            <GridIcon />
          </Box>
          <Box
            flex
            ai="center"
            onClick={() => handleClick(viewOptionList, setViewOptionList)}
            css={{
              '&:hover': {
                cursor: 'pointer',
              },
            }}
          >
            <ListIcon />
          </Box>
        </Box>

      </Box>
    </Styled.OptionsWrapper>
  </Layout>
);
