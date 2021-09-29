import { styled } from '../../theme/stiches.config';
import {
  flexVariants, paddingVariants, marginVariants, backgroundColorVariants,
} from '../../theme/variants';

export const Box = styled('div', {
  boxSizing: 'border-box',
  variants: {
    badge: {
      green: {
        bg: '$green',
      },
      yellow: {
        bg: '$yellow',
      },
    },
    viewOption: {
      list: {
        maxWidth: '$5',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
      },
      grid: {
        maxWidth: '$5',
        margin: 'auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 300px))',
        justifyContent: 'center',
        gap: '30px',
      },
    },
  },
}, flexVariants,
paddingVariants,
marginVariants,
backgroundColorVariants);
