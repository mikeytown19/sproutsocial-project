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
          <Styled.PlantName>
            {names.common}
          </Styled.PlantName>

          <div>
            <Styled.CardBadge toxicity={toxicity}>
              {toxicity ? 'Toxic' : 'Non-toxic'}
            </Styled.CardBadge>
          </div>

        </Styled.CardBottom>
      </Link>
    </Styled.Card>
  )
}

export default Card
