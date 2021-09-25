import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Options from '../components/Options';
import { CardWrapper } from '../components/Card/Card.styles';
import { ListOptionButton, ListOptionContainer } from '../components/Options/Options.styles';
import GridIcon from '../images/assets/grid.svg';
import ListIcon from '../images/assets/list.svg';

const index = ({ data }) => {
  const plantData = data.allDataJson.edges[0].node.plants;

  const [plants, setPlants] = useState(plantData);
  const [viewOptionList, setViewOptionList] = useState(false);
  const [toxicPlants, setToxicPlants] = useState(false);

  const handleInputChange = (event) => {
    setPlants(plantData.filter((item) => {
      const newData = item.names.common.toLowerCase();
      return newData.includes(event.target.value.toLowerCase());
    }), ...plants);
  };

  const handleClick = (event) => {
    setViewOptionList(!viewOptionList);
    console.log(viewOptionList);
  };

  const handleSelect = (event) => {
    const selectToxicValue = event.target.value;
    selectToxicValue && setPlants(plantData.filter((item) => (selectToxicValue === 'toxic' && item.toxicity)
      || (selectToxicValue === 'non-toxic' && !item.toxicity)));
  };

  return (
    <div>
      <Header />
      <Hero handleInputChange={handleInputChange} />
      <Options>
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
            <ListOptionButton onClick={handleClick}>
              <GridIcon />
            </ListOptionButton>
            <ListOptionButton onClick={handleClick}>
              <ListIcon />
            </ListOptionButton>
          </ListOptionContainer>

        </div>

      </Options>
      <CardWrapper listView={viewOptionList}>
        {plants.map((data) => <Card listView={viewOptionList} data={data} />)}
      </CardWrapper>
    </div>

  );
};

export default index;

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
