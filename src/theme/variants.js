import { css } from './stiches.config';

export { paddingVariants } from './variants/padding';

export { marginVariants } from './variants/margin';
export { flexVariants } from './variants/flex';
export { gridVariants } from './variants/grid';
export { fontVariants } from './variants/font';
export { colorVariants, backgroundColorVariants } from './variants/colors';
export { widthVariants } from './variants/widths';

export const containerVariants = css({
  variants: {
    size: {
      1: {
        py: '$2',
        '@bp1': {
          py: '$3',
        },
      },
      2: {
        '@bp1': {
          py: '$7',
        },
        py: '$5',
      },
      3: {
        '@bp1': {
          py: '$9',
        },
        py: '$7',
      },
    },
  },
});
