import React from 'react'
import * as Styled from './Hero.styles'
import CatLeft from '../../images/assets/cat-left.svg'
import CatRight from '../../images/assets/cat-right.svg'
import Layout from '../Layout'
const Hero = () => {
  return (
    <Styled.Wrapper>
      <Layout>
        <Styled.Hero>
          <CatLeft />
          <div>
            <h1>Can my cat eat that?</h1>
            <p>Search and filter common house plants and see what’s safe for Sprinkles to nibble on.</p>
            <label>Search</label>
            <input type='text' />
          </div>
          <CatRight />
        </Styled.Hero>
      </Layout>
    </Styled.Wrapper>
  )
}

export default Hero
