import { styled } from '../../theme/stiches.config';

export const OptionsWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '30px 10px',
  alignItems: 'center',
  select: {
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    appearance: 'none',
    border: 'solid $lightgray 1px',
    borderRadius: '8px',
    width: '250px',
    '@bp1': {
      width: '150px',
    },

  },
});
