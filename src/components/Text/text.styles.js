import { styled } from '../../theme/stiches.config';
import {
  fontVariants, colorVariants, widthVariants, marginVariants, paddingVariants,
} from '../../theme/variants';

export const Text = styled('p', {
  pb: '$5',
  variants: {
    size: {
      sm: {
        fontSize: '$3',
        lineHeight: '$3',
      },
      md: {
        fontSize: '$5',
        lineHeight: '$5',
      },
      lg: {
        fontSize: '$6',
        lineHeight: '$6',
      },
    },
  },

}, colorVariants, fontVariants, widthVariants, marginVariants, paddingVariants);
