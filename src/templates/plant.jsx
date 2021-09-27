import React from 'react';
import {Header, Layout} from '../components';
import { GatsbyImage } from 'gatsby-plugin-image';
import {styled } from '../theme/stiches.config'
import {Box, Text, Badge} from '../components'

const Plant = ({ pageContext }) => {
  const {names, toxicity, details} = pageContext.plant

  return (
    <div>
      <Header />
      <Box css={{
         pt: '$10',
         maxWidth: '$7',
         margin: 'auto',
      }}>
        <ImageWrapper image={pageContext?.plant?.image?.childImageSharp?.gatsbyImageData} alt="poop" />

        <Box flex jc="between" ai="start" py="5" px="3" css={{bb: 'solid $lightgray 1px'}}>
          <Box>
            <Text as="h1" css={{m: '0'}}>
              {names.common}
            </Text>
            <Text color="textLight"><i>{names.scientific}</i></Text>
          </Box>
           <Box>
              <Badge badge={toxicity ? 'yellow' : 'green'}>
                <Text size="xs" color={!toxicity && 'white'}>
                  {toxicity ? 'Toxic' : 'Non-toxic'}
                </Text>
          </Badge>
          </Box>
        </Box>
        <Box flex jc="between" p="3" css={{bb: 'solid $lightgray 1px'}}>
          <Box>
            <Text fw="6">
              Details
            </Text>
          </Box>
          <Box>
            <Text fw="3" maxWidth="2">
              {details}
            </Text>
          </Box>
        </Box>
        { toxicity &&
        <Box flex jc="between" p="3" css={{bb: 'solid $lightgray 1px'}}>
          <Box>
            <Text fw="6">
              Toxicity
            </Text>
          </Box>
          <Box>
              <ul>
                {toxicity.property &&
                <Text fw="3" maxWidth="2" as="li">
                  {toxicity.property}
                </Text>}
                {toxicity.symptoms &&
                <Text fw="3" maxWidth="2" as="li">
                  {toxicity.symptoms}
                </Text>}
              </ul>
              <Text maxWidth="2" size="xs" fw="6">If you suspect your pet may have ingested a potentially toxic substance, contact your local veterinarian as soon as possible.</Text>
          </Box>
        </Box>}
      </Box>

    </div>
  );
};

export default Plant

const ImageWrapper = styled(GatsbyImage, {
  width: '100%',
  height: '400px',
})

