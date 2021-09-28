import { styled } from '../../theme/stiches.config';
import {
  fontVariants, colorVariants, widthVariants, marginVariants, paddingVariants,
} from '../../theme/variants';

export const Text = styled('p', {
  variants: {
    size: {
      badge: {
        fontSize: '$1',
        lineHeight: '$1',
        fontWeight: '$7',
      },
      xs: {
        fontSize: '$2',
        lineHeight: '$1',
        fontWeight: '$7',
      },
      sm: {
        fontSize: '$3',
        lineHeight: '$3',
        fontWeight: '$5',
      },
      md: {
        fontSize: '$5',
        lineHeight: '$5',
        '@bp2': {
          fontSize: '$3',
          lineHeight: '$3',
        },
      },
      lg: {
        fontSize: '$6',
        lineHeight: '$6',
      },
    },
  },

}, colorVariants, fontVariants, widthVariants, marginVariants, paddingVariants);
