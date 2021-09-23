import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero'
import { GatsbyImage } from 'gatsby-plugin-image';

const Plant = ({ pageContext }) => {
  console.log(pageContext)
  return (
    <div>
      <Header />
      <Hero />

      <GatsbyImage image={pageContext?.plant?.image?.childImageSharp?.gatsbyImageData} alt="poop" />
    </div>
  );
};

export default Plant