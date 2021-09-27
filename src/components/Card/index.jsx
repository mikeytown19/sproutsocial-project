import React from 'react';
import { Link } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { List } from '../List';
import { Box } from '../Box';
import { Text } from '../Text';
import { Badge } from '../Badge';
import { styled } from '../../theme/stiches.config';

export const Card = ({ listView, data }) => {
  const {
    image, names, toxicity, details,
  } = data;

  const imageData = getImage(image);
  return (
    !listView
      ? (
        <CardWrapper>
          <Link to={image.name}>
            <Box css={{
              height: '100%',
              maxHeight: '200px',
              '.gatsby-image-wrapper': { height: '100%' },
              img: {
                objectFit: 'cover',
                btlr: '$3',
                btrr: '$3',
              },
            }}
            >
              <GatsbyImage className="image" image={imageData} alt="poop" />
            </Box>
            <Box
              flex
              jc="between"
              ai="center"
              px="2"
              css={{
                bblr: '$3',
                bbrr: '$3',
                border: 'solid $lightgray 1px',
              }}
            >
              <Text size="sm">
                {names.common}
              </Text>

              <Badge badge={toxicity ? 'yellow' : 'green'}>
                <Text size="xs" color={!toxicity && 'white'}>
                  {toxicity ? 'Toxic' : 'Non-toxic'}
                </Text>
              </Badge>

            </Box>
          </Link>
        </CardWrapper>
      )
      : <List to={image.name} imageData={imageData} details={details} {...data} />
  );
};

const CardWrapper = styled('div', {
  borderRadius: '8px',
  transition: 'box-shadow .2s ease-in-out',
  a: { textDecoration: 'none' },
  '&:hover': {
    boxShadow: '$1',
    a: {
      textDecoration: 'none',
      color: '$primary',
    },
  },
});
