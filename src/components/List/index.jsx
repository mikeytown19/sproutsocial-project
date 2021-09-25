import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as Styled from './List.styles';

const List = ({
  to, imageData, names, toxicity, details,
}) => (
  <Styled.List to={to}>
    <Styled.LeftContainer>

      <Styled.ListImage>
        <GatsbyImage className="image" image={imageData} alt="poop" />
      </Styled.ListImage>
      <Styled.PlantName>
        <Styled.ListNames>
          <span>
            {names.common}
          </span>
          <span>
            {names.scientific}
          </span>
        </Styled.ListNames>
      </Styled.PlantName>
    </Styled.LeftContainer>
    <Styled.CardBadgeContainer>
      <Styled.CardBadge toxicity={toxicity}>
        {toxicity ? 'Toxic' : 'Non-toxic'}
      </Styled.CardBadge>
    </Styled.CardBadgeContainer>
    <Styled.ListDetails>
      {details}
    </Styled.ListDetails>
  </Styled.List>
);

export default List;
