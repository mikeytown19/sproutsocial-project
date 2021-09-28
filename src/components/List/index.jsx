import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { Box } from '../Box';
import { Text } from '../Text';
import { Badge } from '../Badge';
import { styled } from '../../theme/stiches.config';

export const List = ({
  to, imageData, names, toxicity, details,
}) => (
  <ListWrapper to={to}>
    <Box
      flex
      ai="center"
      p="1"
      css={{
        flex: 2,
        '@bp1': {
          justifyContent: 'space-between',
        },
      }}
    >

      <Box
        flex
        ai="center"
        css={{
          flex: 1,
          p: '$2',
          '@bp1': {
            p: '$1',
            display: 'flex',
            flex: 'initial',
            justifyContent: 'space-between',
          },
        }}
      >

        <Box css={{
          size: '50px',
          my: '$2',
          '.gatsby-image-wrapper': { height: '100%' },
          img: { borderRadius: '50px' },
        }}
        >
          <GatsbyImage className="image" image={imageData} alt="poop" />
        </Box>
        <Box pl="2" css={{ '@bp1': { pl: '$1' } }}>
          <Box flex fd="column">
            <Text as="span" size="md" fw="5">
              {names.common}
            </Text>
            <Text size="xs" fw="3" as="i" color="textLight">
              {names.scientific}
            </Text>
          </Box>
        </Box>
      </Box>
      <Box
        flex
        css={{
          flex: '0.7',
          '@bp2': {
            justifyContent: 'flex-end',
            flex: 'initial',
          },
        }}
      >
        <Badge
          badge={toxicity ? 'yellow' : 'green'}
        >
          <Text size="xs" color={!toxicity && 'white'}>
            {toxicity ? 'Toxic' : 'Non-toxic'}
          </Text>
        </Badge>
      </Box>
    </Box>
    <Text
      maxWidth="3"
      css={{
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        flex: 4,
        '@bp3': {
          flex: 2,
        },
        '@bp1': {
          display: 'none',
        },
      }}
    >
      {details}
    </Text>
  </ListWrapper>
);

const ListWrapper = styled(Link,
  {

    transition: 'box-shadow .2s ease-in-out',
    textDecoration: 'none',
    color: '$primary',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: '30px',
    borderTop: '$gray solid 1px',
    '&:hover': { boxShadow: '$1' },
    '@bp2': {
      display: 'block',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      px: '0',
    },
  });
