import { css } from '../stiches.config';

export const colorVariants = css({
  variants: {
    color: {
      primary: {
        color: '$primary',
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
    },
  },
});
