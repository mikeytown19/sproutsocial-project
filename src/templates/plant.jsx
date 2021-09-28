import React from 'react';
import {Header, Layout} from '../components';
import {Link} from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image';
import {styled } from '../theme/stiches.config'
import {Box, Text, Badge} from '../components'

const Plant = ({ pageContext }) => {
  console.log(pageContext)
  const {names, toxicity, details, care} = pageContext.plant

  return (
    <div>
      <Header />
      <Box css={{
         pt: '$10',
         maxWidth: '$4',
         margin: 'auto',
         '@bp3': {
           pt: '0'
         }
      }}>
        <ImageWrapper image={pageContext?.plant?.image?.childImageSharp?.gatsbyImageData} alt="poop" />
        <Box px="1">
            <Text color="textLight" size="xs" fw="4" css={{a: { pr: '3px', textDecoration: 'none', color: '$textLight'}}}>
              <Link to="/">
                Home /
              </Link>
                 {names.common}
          </Text>
        </Box>
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
        <Box flex p="3" css={{bb: 'solid $lightgray 1px',
        '@bp1': {
          display: 'block',
          bb: '0',
          p: '$3'
        }}}>
          <Box css={{flex: '1'}}>
            <Text fw="6">
              Details
            </Text>
          </Box>
          <Box css={{flex: '1'}}>
            <Text fw="3" maxWidth="2">
              {details}
            </Text>
          </Box>
        </Box>
        { toxicity &&
        <Box flex p="3" css={{bb: 'solid $lightgray 1px',
        '@bp1': {
          display: 'block',
          bb: '0',
          p: '$3'
        }}}>
          <Box css={{flex: '1'}}>
            <Text fw="6">
              Toxicity
            </Text>
          </Box>
          <Box pl="5" css={{
          flex: '1' ,
          '@bp1': { pl: 'inherit'}}}>
              <Text as="ul" p="0">
                {toxicity.property &&
                <Text fw="3" maxWidth="2" as="li" pb="2">
                  {toxicity.property}
                </Text>}
                {toxicity.symptoms &&
                <Text fw="3" maxWidth="2" as="li">
                  {toxicity.symptoms}
                </Text>}
              </Text>
              <Text  size="xs" fw="7">If you suspect your pet may have ingested a potentially toxic substance, contact your local veterinarian as soon as possible.</Text>
          </Box>
        </Box>}
        { care &&
        <Box flex p="3" css={{bb: 'solid $lightgray 1px',
        '@bp1': {
          display: 'block',
          bb: '0',
          p: '$3'
        }}}>
          <Box css={{flex: '1'}}>
            <Text fw="6">
              Care Taking
            </Text>
          </Box>
          <Box  pl="5"
          css={{
          flex: '1' ,
          '@bp1': { pl: 'inherit'}}}>
              <Text as="ul" p="0">
                {care.light &&
                <Text fw="3" maxWidth="2" as="li" pb="2">
                  {care.light}
                </Text>}
                {care.water &&
                <Text fw="3" maxWidth="2" as="li">
                  {care.water}
                </Text>}
              </Text>
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
  '@bp1': {
    height: '250px'
  }
})

