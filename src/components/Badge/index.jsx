import { styled } from '../../theme/stiches.config';
import { Box } from '../Box';

export const Badge = styled(Box, {
  boxSizing: 'border-box',
  fontSize: '$1',
  fontWeight: '$7',
  borderRadius: '$pill',
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
});
