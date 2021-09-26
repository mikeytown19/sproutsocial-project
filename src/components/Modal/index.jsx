import React from 'react';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import * as Styled from './Modal.styles';

const Modal = ({ handleClick, data }) => {
  console.log(data);
  const {
    image, names, toxicity, details,
  } = data;

  return (
    <Styled.Backdrop onClick={handleClick}>
      <Styled.Modal onClick={(e) => e.stopPropagation()}>
        <GatsbyImage className="image" image={data.childImageSharp.gatsbyImageData} alt="poop" />
        This is Backdrop
      </Styled.Modal>
    </Styled.Backdrop>
  );
};

export default Modal;
