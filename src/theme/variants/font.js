import { css } from '../stiches.config';

export const fontVariants = css({
  variants: {
    fw: {
      1: { fontWeight: '$1' },
      2: { fontWeight: '$2' },
      3: { fontWeight: '$3' },
      4: { fontWeight: '$4' },
      5: { fontWeight: '$5' },
      6: { fontWeight: '$6' },
      7: { fontWeight: '$7' },
      8: { fontWeight: '$8' },
      9: { fontWeight: '$9' },
      normal: { fontWeight: '$normal' },
      bold: { fontWeight: '$bold' },
      extraBold: { fontWeight: '$extraBold' },
    },
    ta: {
      center: {
        textAlign: 'center',
      },
      left: {
        textAlign: 'left',
      },
      right: {
        textAlign: 'right',
      },
    },

  },
});
