import React, { useState} from 'react';
import { graphql } from 'gatsby';
import {Header, Hero, Card, Options, Box, Text} from '../components'
import useLocalStorageState from '../Utils/useLocalStorage';
import LostCat from '../images/assets/lostCat.svg'

const Index = ({ data }) => {
  const plantData = data?.allDataJson?.edges[0]?.node?.plants;

  const [searchTerm, setSearchTerm] = useState('');
  const [selectTerm, setSelectTerm] = useState('');

  const [viewOptionList, setViewOptionList] = useLocalStorageState(
    'listView',
    'grid'
  )

  const handleChange = (event, updateState) =>{
        updateState(event.target.value);
    }
  const handleClick = (param, updateState) => {
       updateState(!param);
    }

  const searchResults = !searchTerm
  ? plantData
  : plantData.filter((plant) => plant.names.common.toLowerCase().includes(searchTerm.toLocaleLowerCase()));

  const results = !selectTerm ? searchResults : searchResults.filter((item) => (
    selectTerm === 'toxic' && item.toxicity)
  || (selectTerm === 'non-toxic' && !item.toxicity))

  console.log(results)

  return (
    <>
      <Header />
      <Hero handleInputChange={(e) => handleChange(e, setSearchTerm)} />
      <Options
        handleClick={handleClick}
        viewOptionList={viewOptionList}
        selectTerm={selectTerm}
        setViewOptionList={setViewOptionList}
        setSelectTerm={setSelectTerm}
        handleChange={handleChange}
      />
      <Box viewOption={viewOptionList === 'grid' ? 'grid': 'list'} listViewOption={viewOptionList}>
        {results?.length ? results.map((data) =>
         <Card
          key={data.image.id}
          listViewOption={viewOptionList}
          data={data} />)
        : <Box flex fd="column" jc="center" ai="center">
          <Text as="h3" fw="5">
            Wait a meow-ment.
          </Text>
          <Box css={{svg: {
            size: '400px',
            '@bp1': {
              maxWidth: '100px',
              maxHeight: '100px'
            }
          }}}>
            <LostCat />
          </Box>
          <Text as="h3" fw="5">
           No Plants Found
          </Text>
        </Box>
        }
      </Box>
    </>
  );
};

export default Index;

export const query = graphql` {
  allDataJson {
    edges {
      node {
        plants {
          details
          image {
            id
            name
          childImageSharp {
            gatsbyImageData(
              width: 300
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
          names {
            common
            scientific
          }
          toxicity {
            property
            symptoms
          }
        }
      }
    }
  }
}
`;
