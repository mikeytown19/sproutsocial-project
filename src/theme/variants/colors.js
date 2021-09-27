import { css } from '../stiches.config';

export const colorVariants = css({
  variants: {
    color: {
      primary: {
        color: '$primary',
      },
      white: {
        color: '$white',
      },
      textLight: {
        color: '$textLight',
      },
    },
  },
});

export const backgroundColorVariants = css({
  variants: {
    bg: {
      primary: {
        bg: '$primary',
      },
      lightblue: {
        bg: '$lightblue',
      },
      green: {
        bg: '$green',
      },
      yellow: {
        bg: '$yellow',
      },

    },
  },
});
