import { styled } from '../../theme/stiches.config';
import {
  flexVariants, paddingVariants, marginVariants, backgroundColorVariants,
} from '../../theme/variants';

export const Box = styled('div', {
  boxSizing: 'border-box',
  '.dummyImage': {
    width: '100%',
    maxWidth: '500px',
  },
  '@bp2': {
    '.dummyImage': {
      width: '100%',
      maxWidth: 'initial',

    },
  },
}, flexVariants,
paddingVariants,
marginVariants,
backgroundColorVariants);
