import React from 'react';
import { Link } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import * as Styled from './Card.styles';
import ListCard from '../List';

const Card = ({ listView, children, data }) => {
  const {
    image, names, toxicity, details,
  } = data;

  const imageData = getImage(image);
  return (
    !listView
      ? (
        <Styled.Card>
          {/* <Link to={image.name}> */}
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
          {/* </Link> */}
        </Styled.Card>
      )
      : <ListCard to={image.name} imageData={imageData} details={details} {...data} />

  );
};

export default Card;
