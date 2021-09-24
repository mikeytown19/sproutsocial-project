import React from 'react'
import * as Styled from './Card.styles'
import { Link } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
const Card = ({ children, data }) => {
  const { image, names, toxicity } = data
  const imageData = getImage(image)
  return (
    <Styled.Card>
      <Link to={image.name}>
        <Styled.CardTop>
          <GatsbyImage className="image" image={imageData} alt="poop" />
        </Styled.CardTop>
        <Styled.CardBottom>
          <p>
            {names.common}
          </p>

          <div>
            <p>
              {toxicity && 'toxic'}
            </p>
          </div>

        </Styled.CardBottom>
      </Link>
    </Styled.Card>
  )
}

export default Card
