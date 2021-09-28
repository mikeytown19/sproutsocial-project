import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import {Header, Hero, Card, Options, Box} from '../components'
import useLocalStorageState from '../Utils/useLocalStorage';

const Index = ({ data }) => {
  const plantData = data?.allDataJson?.edges[0]?.node?.plants;

  // const [viewOptionList, setViewOptionList] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectTerm, setSelectTerm] = useState('');

  const [viewOptionList, setViewOptionList] = useLocalStorageState(
    'listView',
    false
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
      <Box viewOption={viewOptionList ? 'list': 'grid'} listView={viewOptionList}>
        {results.map((data) =>
         <Card
          key={data.image.id}
          listView={viewOptionList}
          data={data} />)}
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

// 6bcd5689-8107-59a1-a17c-039738bfbbba
