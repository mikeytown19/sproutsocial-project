import { css } from '../stiches.config';

export const flexVariants = css({
  variants: {
    flex: {
      true: {
        flexWrap: 'wrap',
        '@bp2': {
          display: 'flex',
          flexWrap: 'initial',
        },
      },
    },
    fd: {
      column: {
        fd: 'column',
      },
    },
    jc: {
      center: {
        jc: 'center',
      },
      start: {
        jc: 'flex-start',
      },
      end: {
        jc: 'flex-end',
      },
      between: {
        jc: 'space-between',
      },
    },
    ai: {
      center: {
        ai: 'center',
      },
      start: {
        ai: 'flex-start',
      },
      end: {
        ai: 'flex-end',
      },
    },
  },
});
