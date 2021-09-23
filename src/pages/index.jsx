import React from 'react';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import Header from '../components/Header';
import Hero from '../components/Hero'
import { Link } from 'gatsby'

const index = ({ data }) => {
  const plantData = data.allDataJson.edges[0].node.plants;
  return (
    <div>
      <Header />
      <Hero />
      {plantData.map(({
        care, details, image, names, toxicity,
      }) => {
        const imageData = getImage(image);
        return (
          <Link to={image.name}>
            {names.common}
            <GatsbyImage image={imageData} alt="poop" />
          </Link>
        );
      })}
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
              width: 500
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
          details
          names {
            common
            scientific
          }
          toxicity {
            property
            symptoms
          }
          care {
            light
            water
          }
        }
      }
    }
  }
}
`;


// 6bcd5689-8107-59a1-a17c-039738bfbbba