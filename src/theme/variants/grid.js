import { css } from '../stiches.config';

export const gridVariants = css({
  variants: {
    ji: {
      center: {
        ji: 'center',
      },
      start: {
        ji: 'flex-start',
      },
      end: {
        ji: 'flex-end',
      },
    },
    gap: {
      1: { gap: '$1' },
      2: { gap: '$3' },
      3: { gap: '$5' },
      4: { gap: '$7' },
      5: { gap: '$9' },
      6: { gap: '$11' },
    },

    columns: {
      1: {
        '@bp1': {
          gridTemplateColumns: 'repeat(1, 1fr)',
        },
      },
      2: {
        '@bp2': {
          gridTemplateColumns: 'repeat(auto-fit, minmax($13, 1fr))',
        },
        '@initial': { gridTemplateColumns: 'repeat(1, 1fr)' },
      },
      3: {
        '@bp2': {
          gridTemplateColumns: 'repeat(3, 1fr)',
        },
        '@initial': { gridTemplateColumns: 'repeat(1, 1fr)' },
      },
      4: {
        '@bp1': {
          gridTemplateColumns: 'repeat(1, 1fr)',
        },
        '@bp2': {
          gridTemplateColumns: 'repeat(2, 1fr)',
        },
        '@bp3': {
          gridTemplateColumns: 'repeat(4, 1fr)',
        },

      },
    },
  },
  '@initial': { columns: 1 },
});
