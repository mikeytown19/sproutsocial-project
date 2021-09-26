import React from 'react';
import Header from '../components/Header';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled'
import { graphql } from 'gatsby';
import Layout from '../components/Layout'

const Plant = ({ pageContext }) => {
  console.log(pageContext)
  const {names} = pageContext.plant

  return (
    <div>
      <Header />
      <Wrapper>
        <ImageWrapper image={pageContext?.plant?.image?.childImageSharp?.gatsbyImageData} alt="poop" />

        <div>
          <div>
            <h1>
              {names.common}
            </h1>
            <p><i>{names.scientific}</i></p>
          </div>
        </div>
      </Wrapper>

    </div>
  );
};

export default Plant


const ImageWrapper = styled(GatsbyImage)`
  width: 100%;
  height: 400px;

`

const Wrapper = styled.div`
  max-width: 800px;
  margin: auto;
`

