import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import Header from '../components/Header';
import Hero from '../components/Hero'
import Card from '../components/Card'
import { CardWrapper } from '../components/Card/Card.styles'

const index = ({ data }) => {
  const plantData = data.allDataJson.edges[0].node.plants;

  const [plants, setPlants] = useState(plantData)

  const handleInputChange = event => {
    setPlants(plantData.filter(item => {
      const newData = item.names.common.toLowerCase();
      return newData.includes(event.target.value.toLowerCase())
    }))
  }

  return (
    <div>
      <Header />
      <Hero handleInputChange={handleInputChange} />
      <div>

      </div>
      <CardWrapper>
        {plants.map((data) => <Card data={data} />)}
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