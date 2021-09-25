import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Link } from 'gatsby';

export const Card = styled.div`
  border-radius: 8px;
  transition: box-shadow .2s ease-in-out;
  a {
    text-decoration: none;
  }
  &:hover {
    box-shadow: 0 0 12px rgba(0, 0, 0, .25);

    a {
      text-decoration: none;
      color: var(--color-primary);
    }
}
`;

export const PlantName = styled.p`
  color: var(--color-primary);
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;

`;
export const CardTop = styled.div`
height: 100%;

max-height: 200px;

.gatsby-image-wrapper {
  height: 100%;
  }

img {
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  }

`;

export const CardBadge = styled.p`
  background-color: ${({ toxicity }) => (toxicity ? 'var(--color-yellow)' : 'var(--color-green)')};
  color: ${({ toxicity }) => !toxicity && 'white'};
  font-size: 12px;
  font-weight: 700;
  border-radius: 50px;
  padding:5px 10px;
`;
export const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;
  padding: 0px 12px;
  border: solid var(--color-gray) 1px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const CardWrapper = styled.div(({ listView }) => {
  if (listView) {
    return css`
      max-width: 1400px;
      margin: auto;
      display: flex;
      flex-direction: column;
    `;
  }
  return css`
    max-width: 1400px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 300px));
    padding: 0 30px;
    justify-content: center;
    gap: 30px;
`;
});

export const List = styled(Link)`
  border-radius: 8px;
  transition: box-shadow .2s ease-in-out;
  text-decoration: none;
  color: var(--color-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    box-shadow: 0 0 12px rgba(0, 0, 0, .25);
  }
`;

export const ListImage = styled.div`
  height: 50px;
  width: 50px;
  padding-right: 25px;
  padding: 10px;
  margin: 10px 0;

  .gatsby-image-wrapper {
    height: 100%;
  }

  img {
    border-radius: 50px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ListDetails = styled.p`
white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 900px;
`;

export const ListNames = styled.div`
  display: flex;
  flex-direction: column;

  span:last-of-type {
    font-size: 13px;
    font-style: italic;
    color: var(--color-text-light);
    font-weight: 400;
  }

`;
