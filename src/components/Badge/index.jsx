import { styled } from '../../theme/stiches.config';
import {
  flexVariants, paddingVariants, marginVariants, backgroundColorVariants,
} from '../../theme/variants';
import { Box } from '../Box';

export const Badge = styled(Box, {
  boxSizing: 'border-box',
  fontSize: '12px',
  fontWeight: 700,
  borderRadius: '50px',
  padding: '5px 10px',
  '>p': {
    m: '0',
  },
  variants: {
    badge: {
      green: {
        bg: '$green',
      },
      yellow: {
        bg: '$yellow',
      },
    },
  },
}, flexVariants,
paddingVariants,
marginVariants,
backgroundColorVariants);
