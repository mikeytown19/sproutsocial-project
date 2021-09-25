import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Link } from 'gatsby';

export const List = styled(Link)`

  transition: box-shadow .2s ease-in-out;
  text-decoration: none;
  color: var(--color-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 30px;
  border-top: var(--color-gray) solid 1px;
  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.17);
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

export const CardBadgeContainer = styled.div`
text-align: left;
flex: .7;

`;
export const CardBadge = styled.p`
  background-color: ${({ toxicity }) => (toxicity ? 'var(--color-yellow)' : 'var(--color-green)')};
  color: ${({ toxicity }) => !toxicity && 'white'};
  font-size: 12px;
  font-weight: 700;
  border-radius: 50px;
  padding:5px 10px;
  width: fit-content;
`;

export const PlantName = styled.p`
  color: var(--color-primary);
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const ListDetails = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  flex: 4;
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
