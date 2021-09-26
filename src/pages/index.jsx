import React, { useState } from 'react';
import { graphql } from 'gatsby';
import {Header, Hero, Card, Options} from '../components'
import { CardWrapper } from '../components/Card/Card.styles';
import { ListOptionButton, ListOptionContainer } from '../components/Options/Options.styles';
import GridIcon from '../images/assets/grid.svg';
import ListIcon from '../images/assets/list.svg';

const Index = ({ data }) => {
  const plantData = data?.allDataJson?.edges[0]?.node?.plants;


  const [viewOptionList, setViewOptionList] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectTerm, setSelectTerm] = useState('');


  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClick = (temp, settemp) => {
    console.log(temp)
    settemp(!temp);
  };

  const handleSelect = (event) => {
    setSelectTerm(event.target.value)
  };



  const searchResults = !searchTerm
  ? plantData
  : plantData.filter((plant) => plant.names.common.toLowerCase().includes(searchTerm.toLocaleLowerCase()));

  const results = !selectTerm ? searchResults : searchResults.filter((item) => (
    selectTerm === 'toxic' && item.toxicity)
  || (selectTerm === 'non-toxic' && !item.toxicity))

  return (
    <div>
      <Header />
      <Hero handleInputChange={handleInputChange} />

      {/* <Options>
        <div>
          <label>Toxicity</label>
          <select onChange={handleSelect}>
            <option value="" default>Select an option</option>
            <option value="toxic">toxic</option>
            <option value="non-toxic">non-toxic</option>
          </select>
        </div>

        <div>
          View Options
          <ListOptionContainer>
            <ListOptionButton onClick={() => handleClick(viewOptionList, setViewOptionList)}>
              <GridIcon />
            </ListOptionButton>
            <ListOptionButton onClick={() => handleClick(viewOptionList, setViewOptionList)}>
              <ListIcon />
            </ListOptionButton>
          </ListOptionContainer>

        </div>
      </Options>
      <CardWrapper listView={viewOptionList}>
        {results.map((data) =>
        <Card
          listView={viewOptionList}
          data={data} />)}
      </CardWrapper> */}
    </div>
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
