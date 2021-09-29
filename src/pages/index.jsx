import React, { useState, useEffect} from 'react';
import { graphql } from 'gatsby';
import {Header, Hero, Card, Options, Box, ErrorCat} from '../components'
import useLocalStorageState from '../Utils/useLocalStorage';


const useFromLocalStorage = (initialValue) => {
  const [viewOptionList, setViewOptionList] = useLocalStorageState(
    'listView',
    initialValue
  )
  return { viewOptionList, setViewOptionList }
}


const Index = ({ data }) => {
  const plantData = data?.allDataJson?.edges[0]?.node?.plants;

  const [searchTerm, setSearchTerm] = useState('');
  const [selectTerm, setSelectTerm] = useState('');

  const {viewOptionList, setViewOptionList } = useFromLocalStorage(false)

  useEffect(() => {
    if (!viewOptionList) {
      setViewOptionList('grid')
    }

  }, [])

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

  console.log(viewOptionList, 'viewOptionList')


  const BoxViewWrapper = ({children}) => {
    return viewOptionList ==="grid"
  ? <Box test-id="grid" viewOption="grid">{children} </Box> : <Box test-id="list"  viewOption="list">{children} </Box>
  }

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
      {viewOptionList && <BoxViewWrapper>
        {results?.length ? results.map((data) =>
         <Card
          key={data.image.id}
          listViewOption={viewOptionList}
          data={data} />)
        : <ErrorCat  bottomText="No Plants Found" />
        }
      </BoxViewWrapper>}
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
